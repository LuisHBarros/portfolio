import { PrismaClient } from '@prisma/client'
import { ContactInfo } from '@/types'

export interface IContactRepository {
  findAll(): Promise<ContactInfo[]>
}

export class ContactRepository implements IContactRepository {
  constructor(private readonly db: PrismaClient) {}

  async findAll(): Promise<ContactInfo[]> {
    const contacts = await this.db.contactInfo.findMany({
      orderBy: { order: 'asc' },
    })

    return contacts.map(c => ({
      id: c.id,
      key: c.key,
      labelEn: c.labelEn,
      labelPt: c.labelPt,
      value: c.value,
      href: c.href,
      order: c.order,
    }))
  }
}
