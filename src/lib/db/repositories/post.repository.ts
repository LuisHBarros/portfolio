import { PrismaClient } from '@prisma/client'

export interface IPostRepository {
  findAll(filter?: string): Promise<any[]>
}

export class PostRepository implements IPostRepository {
  constructor(private readonly db: PrismaClient) {}

  async findAll(filter?: string) {
    const posts = await this.db.post.findMany({
      orderBy: { order: 'desc' },
      include: {
        postTags: true,
      },
    })

    const filtered = filter && filter !== 'all'
      ? posts.filter(post => post.tags.includes(filter))
      : posts

    return filtered
  }

  async findById(id: number) {
    return this.db.post.findUnique({
      where: { id },
      include: { postTags: true },
    })
  }
}
