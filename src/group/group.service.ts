import { Injectable } from "@nestjs/common";
import { OutputDto } from "src/common/dtos/output.dto";
import { PrismaService } from "src/prisma.service";  
import { Group } from "@prisma/client";

@Injectable() 
export class GroupService {
    constructor(private readonly prisma: PrismaService) { } 

    async getGroups (): Promise<Group[]> {
        let group: Group[]; 

        group = await this.prisma.group.findMany(); 

        return group;
    }

}