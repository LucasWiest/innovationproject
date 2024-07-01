import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service'; 
import { MessageResolver } from './message.resolver';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';

@Module({
  providers: [MessageService, PrismaService, MessageResolver], 
  controllers: [MessageController]
})
export class MessageModule { }