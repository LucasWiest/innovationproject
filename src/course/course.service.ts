import { Injectable } from "@nestjs/common";
import { OutputDto } from "src/common/dtos/output.dto";
import { PrismaService } from "src/prisma.service";  
import { Course, Group } from "@prisma/client";

@Injectable() 
export class CourseService {
    constructor(private readonly prisma: PrismaService) { } 

    async getCourses (): Promise<Course[]> {
        let course: Course[]; 

        course = await this.prisma.course.findMany(); 

        return course;
    }
}