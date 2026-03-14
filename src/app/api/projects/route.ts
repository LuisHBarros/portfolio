import { NextResponse } from 'next/server'
import { createDbClient } from '@/lib/db/client'
import { ProjectRepository } from '@/lib/db/repositories/project.repository'

export async function GET() {
  const db = createDbClient()
  try {
    const repo = new ProjectRepository(db)
    const data = await repo.findAll()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching projects:', error)
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 })
  } finally {
    await db.$disconnect()
  }
}
