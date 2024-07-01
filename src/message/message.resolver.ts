import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { MessageService } from "./message.service"; 
import { MessageModel } from "src/models/message.model";
import { GetMessagesArgs } from "./args/getMessageArgs";
import { CreateMessageInput } from "./dtos/createMessageDto";

@Resolver(_ => MessageModel) 
export class MessageResolver {
    constructor (private readonly messaService: MessageService) {} 

    @Query(() => [MessageModel])
    getMessage (@Args() getMessagesArgs: GetMessagesArgs) {
        const { userSenderId, userRecipientId } = getMessagesArgs;
        return this.messaService.getMessages(userSenderId, userRecipientId);
    } 

    @Mutation(() => MessageModel) 
    createMessage (@Args("messa") messa: CreateMessageInput) {
        return this.messaService.createMessage(messa);
    }
}