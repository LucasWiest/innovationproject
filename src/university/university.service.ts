import { Injectable } from "@nestjs/common";
import { OutputDto } from "src/common/dtos/output.dto";
import { PrismaService } from "src/prisma.service";  
import { Group, University } from "@prisma/client";

@Injectable() 
export class UniversityService {
    constructor(private readonly prisma: PrismaService) { } 

    async getUniversity (): Promise<University[]> {
        let university: University[]; 

        university = await this.prisma.university.findMany(); 

        return university;
    }

}