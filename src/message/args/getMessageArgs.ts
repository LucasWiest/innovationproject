import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class GetMessagesArgs {
  @Field(type => Int)
  userSenderId: number;

  @Field(type => Int)
  userRecipientId: number;
}
