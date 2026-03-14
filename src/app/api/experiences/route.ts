import { NextResponse } from 'next/server'
import { createDbClient } from '@/lib/db/client'
import { ExperienceRepository } from '@/lib/db/repositories/experience.repository'

export async function GET() {
  const db = createDbClient()
  try {
    const repo = new ExperienceRepository(db)
    const data = await repo.findAll()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching experiences:', error)
    return NextResponse.json({ error: 'Failed to fetch experiences' }, { status: 500 })
  } finally {
    await db.$disconnect()
  }
}
