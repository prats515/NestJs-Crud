import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service'; // Adjust the path accordingly
import { Comment } from '@prisma/client'; // Import the Prisma User model
import { UUID } from 'crypto';

@Injectable()
export class CommentService {
  constructor(private readonly prisma: PrismaService) {}

  async getComments(): Promise<Comment[]> {
    return this.prisma.comment.findMany();
  }

  async getCommentById(id: UUID): Promise<Comment | null> {
    return this.prisma.comment.findUnique({
      where: { id },
    });
  }

  async getCommentsByUserId(id: UUID): Promise<Comment[] | null> {
    return this.prisma.comment.findMany({
      where: { id },
    });
  }

  async addComment(postComment: Comment): Promise<Comment> {
    return this.prisma.comment.create({
      data: postComment,
    });
  }

  async deleteComment(id: UUID): Promise<Comment[]> {
    await this.prisma.comment.deleteMany({
      where: { id },
    });

    return this.prisma.comment.findMany();
  }
}
