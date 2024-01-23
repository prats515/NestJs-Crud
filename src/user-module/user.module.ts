// user.module.ts

import { Module } from '@nestjs/common';
import { UserController } from '../controller/user.controller';
import { UserService } from '../service/user.service';
import { PrismaService } from '../prisma.service'; // Adjust the path accordingly

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService],
})
export class UserModule {}
