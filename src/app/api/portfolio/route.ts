import { NextResponse } from 'next/server'
import { createDbClient } from '@/lib/db/client'
import { ExperienceRepository } from '@/lib/db/repositories/experience.repository'
import { SkillRepository } from '@/lib/db/repositories/skill.repository'
import { ProjectRepository } from '@/lib/db/repositories/project.repository'
import { PostRepository } from '@/lib/db/repositories/post.repository'
import { ContactRepository } from '@/lib/db/repositories/contact.repository'
import { EducationRepository } from '@/lib/db/repositories/education.repository'
import { parseMarkdown } from '@/lib/markdown'

export async function GET() {
  const db = createDbClient()

  try {
    const experienceRepo = new ExperienceRepository(db)
    const skillRepo = new SkillRepository(db)
    const projectRepo = new ProjectRepository(db)
    const postRepo = new PostRepository(db)
    const contactRepo = new ContactRepository(db)
    const educationRepo = new EducationRepository(db)

    const [experiences, skills, projects, posts, contact, education] = await Promise.all([
      experienceRepo.findAll(),
      skillRepo.findAll(),
      projectRepo.findAll(),
      postRepo.findAll(),
      contactRepo.findAll(),
      educationRepo.findAll(),
    ])

    const parsedPosts = posts.map((post) => ({
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
      postTags: post.postTags.map((tag) => ({
        id: tag.id,
        label: tag.label,
        postId: tag.postId,
      })),
    }))

    return NextResponse.json({
      experiences,
      skills,
      projects,
      posts: parsedPosts,
      contact,
      education,
    })
  } catch (error) {
    console.error('Error fetching portfolio data:', error)
    return NextResponse.json({ error: 'Failed to fetch portfolio data' }, { status: 500 })
  }
}

export const revalidate = 3600
