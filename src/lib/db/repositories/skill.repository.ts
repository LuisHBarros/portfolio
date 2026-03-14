import { PrismaClient } from '@prisma/client'
import { SkillCategory, Skill } from '@/types'

export interface ISkillRepository {
  findAll(): Promise<SkillCategory[]>
}

export class SkillRepository implements ISkillRepository {
  constructor(private readonly db: PrismaClient) {}

  async findAll(): Promise<SkillCategory[]> {
    const categories = await this.db.skillCategory.findMany({
      orderBy: { order: 'asc' },
      include: {
        skills: true,
      },
    })

    return categories.map(cat => ({
      id: cat.id,
      order: cat.order,
      keyEn: cat.keyEn,
      keyPt: cat.keyPt,
      skills: cat.skills.map(s => ({
        id: s.id,
        label: s.label,
        isPrimary: s.isPrimary,
        categoryId: s.categoryId,
      })),
    }))
  }
}
