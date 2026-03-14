import { PrismaClient } from '@prisma/client'
import { Education } from '@/types'

export interface IEducationRepository {
  findAll(): Promise<Education[]>
}

export class EducationRepository implements IEducationRepository {
  constructor(private readonly db: PrismaClient) {}

  async findAll(): Promise<Education[]> {
    const education = await this.db.education.findMany({
      orderBy: { order: 'asc' },
    })

    return education.map(e => ({
      id: e.id,
      order: e.order,
      badge: e.badge,
      titleEn: e.titleEn,
      titlePt: e.titlePt,
      subEn: e.subEn,
      subPt: e.subPt,
    }))
  }
}
