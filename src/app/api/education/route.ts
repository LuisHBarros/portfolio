import { NextResponse } from 'next/server'
import { createDbClient } from '@/lib/db/client'
import { EducationRepository } from '@/lib/db/repositories/education.repository'

export async function GET() {
  const db = createDbClient()
  try {
    const repo = new EducationRepository(db)
    const data = await repo.findAll()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching education:', error)
    return NextResponse.json({ error: 'Failed to fetch education' }, { status: 500 })
  }
}

export const revalidate = 3600
