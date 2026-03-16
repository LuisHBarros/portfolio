import { NextResponse } from 'next/server'
import { createDbClient } from '@/lib/db/client'
import { PostRepository } from '@/lib/db/repositories/post.repository'
import { parseMarkdown } from '@/lib/markdown'

export async function GET(request: Request) {
  const db = createDbClient()
  try {
    const { searchParams } = new URL(request.url)
    const filter = searchParams.get('filter') || undefined
    const repo = new PostRepository(db)
    const posts = await repo.findAll(filter)

    // Converte Markdown → HTML na API, não no cliente
    const parsed = posts.map(post => ({
      id: post.id,
      order: post.order,
      titleEn: post.titleEn,
      titlePt: post.titlePt,
      excerptEn: post.excerptEn,
      excerptPt: post.excerptPt,
      bodyEn: parseMarkdown(post.contentEn),
      bodyPt: parseMarkdown(post.contentPt),
      tags: post.tags,
      date: post.date,
      readTimeEn: post.readTimeEn,
      readTimePt: post.readTimePt,
      postTags: post.postTags.map(t => ({
        id: t.id,
        label: t.label,
        postId: t.postId,
      })),
    }))

    return NextResponse.json(parsed)
  } catch (error) {
    console.error('Error fetching posts:', error)
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 })
  }
}

export const dynamic = 'force-dynamic'
