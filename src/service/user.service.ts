import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service'; // Adjust the path accordingly
import { User } from '@prisma/client'; // Import the Prisma User model
import { UUID } from 'crypto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async getUserByUserId(id: UUID): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async addUser(user: User): Promise<User> {
    return this.prisma.user.create({
      data: user,
    });
  }

  async deleteUser(email: string): Promise<User[]> {
    await this.prisma.user.deleteMany({
      where: { email },
    });

    return this.prisma.user.findMany();
  }
}
