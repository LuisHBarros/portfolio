import { PrismaClient } from '@prisma/client'
import { Project, ProjectBullet, ProjectTag } from '@/types'

export interface IProjectRepository {
  findAll(): Promise<Project[]>
}

export class ProjectRepository implements IProjectRepository {
  constructor(private readonly db: PrismaClient) {}

  async findAll(): Promise<Project[]> {
    const projects = await this.db.project.findMany({
      orderBy: { order: 'asc' },
      include: {
        bullets: {
          orderBy: { order: 'asc' },
        },
        tags: true,
      },
    })

    return projects.map(proj => ({
      id: proj.id,
      order: proj.order,
      titleEn: proj.titleEn,
      titlePt: proj.titlePt,
      subEn: proj.subEn,
      subPt: proj.subPt,
      githubUrl: proj.githubUrl,
      bullets: proj.bullets.map(b => ({
        id: b.id,
        order: b.order,
        textEn: b.textEn,
        textPt: b.textPt,
        projectId: b.projectId,
      })),
      tags: proj.tags.map(t => ({
        id: t.id,
        label: t.label,
        projectId: t.projectId,
      })),
    }))
  }
}
