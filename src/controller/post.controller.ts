import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { Post as PrismaPost } from '@prisma/client'; // Import the Prisma User model
import { UUID } from 'node:crypto';
import { PostService } from 'src/service/post.service';

@Controller('posts')
export class UserController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async getPosts(): Promise<PrismaPost[]> {
    return this.postService.getPosts();
  }

  @Get('/id/:id')
  async getPostById(@Param('id') id: UUID): Promise<PrismaPost> {
    return this.postService.getPostById(id);
  }

  @Get('user/:id')
  async getPostByUserId(@Param('id') id: UUID): Promise<PrismaPost> {
    return this.postService.getPostByUserId(id);
  }

  @Delete('delete/:id')
  async deletePost(@Param('id') id: UUID): Promise<PrismaPost[]> {
    return this.postService.deletePost(id);
  }

  @Post()
  async addPost(@Body() post: PrismaPost): Promise<PrismaPost> {
    return this.postService.addPost(post);
  }
}
