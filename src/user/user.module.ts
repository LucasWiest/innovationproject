import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service'; 
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { UserController } from './user.controller';


@Module({
  providers: [UserService, PrismaService], 
  controllers: [UserController]
})
export class UserModule { }