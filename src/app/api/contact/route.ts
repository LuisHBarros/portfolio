import { NextResponse } from 'next/server'
import { createDbClient } from '@/lib/db/client'
import { ContactRepository } from '@/lib/db/repositories/contact.repository'

export async function GET() {
  const db = createDbClient()
  try {
    const repo = new ContactRepository(db)
    const data = await repo.findAll()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching contact:', error)
    return NextResponse.json({ error: 'Failed to fetch contact' }, { status: 500 })
  }
}

export const revalidate = 3600
