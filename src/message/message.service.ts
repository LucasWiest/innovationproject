import { Injectable } from "@nestjs/common";
import { OutputDto } from "src/common/dtos/output.dto";
import { PrismaService } from "src/prisma.service";  
import { Prisma, Message } from "@prisma/client";
import { CreateMessageInput } from "./dtos/createMessageDto";

@Injectable() 
export class MessageService {
    constructor(private readonly prisma: PrismaService) { } 

    async getMessages(userSenderId: number, userRecipientId: number): Promise<Message[]> {
        try 
        {
            const messages = await this.prisma.message.findMany({
            where: {
                AND: [
                { userSenderId },
                { userRecipientId }
                ]
            },
            orderBy: {
                date: 'asc'
            }
            });
        
            return messages; 
        }
        catch(error) {
            
        }
    }

    async createMessage(data: CreateMessageInput): Promise<OutputDto> {
        try 
        {
            this.prisma.message.create({
                data: {
                  text: data.text,
                  date: data.date,
                  userSenderId: data.userSenderId,
                  userRecipientId: data.userRecipientId,
                },
            });

            return {
                ok: true
            }

        } catch (error) {
            return {
                ok: false,
                error: 'An unexpected error occured'
            }
        }
    }

}