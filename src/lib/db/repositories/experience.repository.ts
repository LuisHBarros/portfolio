import { PrismaClient } from '@prisma/client'
import { Experience, ExperienceBullet } from '@/types'

export interface IExperienceRepository {
  findAll(): Promise<Experience[]>
}

export class ExperienceRepository implements IExperienceRepository {
  constructor(private readonly db: PrismaClient) {}

  async findAll(): Promise<Experience[]> {
    const experiences = await this.db.experience.findMany({
      orderBy: { order: 'asc' },
      include: {
        bullets: {
          orderBy: { order: 'asc' },
        },
      },
    })

    return experiences.map(exp => ({
      id: exp.id,
      order: exp.order,
      titleEn: exp.titleEn,
      titlePt: exp.titlePt,
      dateEn: exp.dateEn,
      datePt: exp.datePt,
      company: exp.company,
      location: exp.location,
      bullets: exp.bullets.map(b => ({
        id: b.id,
        order: b.order,
        textEn: b.textEn,
        textPt: b.textPt,
        experienceId: b.experienceId,
      })),
      createdAt: exp.createdAt,
    }))
  }
}
