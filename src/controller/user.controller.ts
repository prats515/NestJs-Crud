import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { User as PrismaUser } from '@prisma/client'; // Import the Prisma User model
import { UUID } from 'node:crypto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers(): Promise<PrismaUser[]> {
    return this.userService.getUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: UUID): Promise<PrismaUser | null> {
    return this.userService.getUserByUserId(id);
  }

  @Get('email/:email')
  async getUserByEmail(
    @Param('email') email: string,
  ): Promise<PrismaUser | null> {
    return this.userService.getUserByEmail(email);
  }

  @Post()
  async addUser(@Body() user: PrismaUser): Promise<PrismaUser> {
    return this.userService.addUser(user);
  }

  @Delete(':email')
  async deleteUser(@Param('email') email: string): Promise<PrismaUser[]> {
    return this.userService.deleteUser(email);
  }
}
