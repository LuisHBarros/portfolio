import { NextResponse } from 'next/server'
import { createDbClient } from '@/lib/db/client'
import { SkillRepository } from '@/lib/db/repositories/skill.repository'

export async function GET() {
  const db = createDbClient()
  try {
    const repo = new SkillRepository(db)
    const data = await repo.findAll()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching skills:', error)
    return NextResponse.json({ error: 'Failed to fetch skills' }, { status: 500 })
  } finally {
    await db.$disconnect()
  }
}
