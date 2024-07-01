import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service'; 
import { CourseController } from './course.controller';
import { CourseService } from './course.service';

@Module({
  providers: [CourseService, PrismaService], 
  controllers: [CourseController]
})
export class CourseModule { }