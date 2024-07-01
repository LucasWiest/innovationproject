import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { OutputDto } from "src/common/dtos/output.dto";
import { PrismaService } from "src/prisma.service"; 

@Injectable() 
export class UserService {
    constructor(private readonly prisma: PrismaService) { } 

    async getUsers (): Promise<User[]> {
        let user: User[]; 

        user = await this.prisma.user.findMany(); 

        return user;
    }

}