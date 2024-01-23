import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service'; // Adjust the path accordingly
import { Post, User } from '@prisma/client'; // Import the Prisma User model
import { UUID } from 'crypto';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  async getPosts(): Promise<Post[]> {
    return this.prisma.post.findMany();
  }

  async getPostById(id: UUID): Promise<Post | null> {
    return this.prisma.post.findUnique({
      where: { id },
    });
  }

  async getPostByUserId(id: UUID): Promise<Post | null> {
    return this.prisma.post.findUnique({
      where: { id },
    });
  }

  async addPost(postData: Post): Promise<Post> {
    return this.prisma.post.create({
      data: postData,
    });
  }

  async deletePost(id: UUID): Promise<Post[]> {
    await this.prisma.post.deleteMany({
      where: { id },
    });

    return this.prisma.post.findMany();
  }
}
