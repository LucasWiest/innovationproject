import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageModel } from 'src/models/message.model';
import { GetMessagesArgs } from './args/getMessageArgs';
import { CreateMessageInput } from './dtos/createMessageDto';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Get()
  async getMessages(@Query() getMessagesArgs: GetMessagesArgs) {
    const { userSenderId, userRecipientId } = getMessagesArgs;
    return this.messageService.getMessages(userSenderId, userRecipientId);
  }

  @Post()
  async createMessage(@Body() createMessageInput: CreateMessageInput) {
    return this.messageService.createMessage(createMessageInput);
  }
}
