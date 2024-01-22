// user.module.ts

import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaService } from '../prisma.service'; // Adjust the path accordingly

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService],
})
export class UserModule {}

// import { Module } from '@nestjs/common';
// import { UserController } from './user.controller';
// import { UserService } from './user.service';

// @Module({
//   imports: [UserModule],
//   controllers: [UserController],
//   providers: [UserService],
// })
// export class UserModule {}
