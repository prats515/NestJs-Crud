import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { CommentService } from '../service/comment.service';
import { Comment as PrismaComment } from '@prisma/client'; // Import the Prisma User model
import { UUID } from 'node:crypto';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get()
  async getComments(): Promise<PrismaComment[]> {
    return this.commentService.getComments();
  }

  @Get(':id')
  async getCommentById(@Param('id') id: UUID): Promise<PrismaComment | null> {
    return this.commentService.getCommentById(id);
  }

  @Get('users/:id')
  async getCommentByUserId(
    @Param('id') id: UUID,
  ): Promise<PrismaComment[] | null> {
    return this.commentService.getCommentsByUserId(id);
  }

  @Post()
  async addComment(@Body() comment: PrismaComment): Promise<PrismaComment> {
    return this.commentService.addComment(comment);
  }

  @Delete(':id')
  async deleteUser(@Param('id') commentId: UUID): Promise<PrismaComment[]> {
    return this.commentService.deleteComment(commentId);
  }
}
