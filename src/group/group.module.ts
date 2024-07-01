import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service'; 
import { GroupService } from './group.service';
import { GroupResolver } from './group.resolver';
import { GroupController } from './group.controller';


@Module({
  providers: [GroupService, PrismaService], 
  controllers: [GroupController]
})
export class GroupModule { }