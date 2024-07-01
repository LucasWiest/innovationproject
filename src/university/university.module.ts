import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service'; 
import { UniversityService } from './university.service';
import { UniversityController } from './university.controller';

@Module({
  providers: [UniversityService, PrismaService], 
  controllers: [UniversityController]
})
export class UniversityModule { }