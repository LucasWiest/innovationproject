import { Field, InputType } from '@nestjs/graphql';
import { IsDate, IsString, IsInt } from 'class-validator';

@InputType()
export class CreateMessageInput {
  @Field(type => String)
  @IsString()
  text: string;

  @Field(type => Date)
  @IsDate()
  date: Date;

  @Field(type => Number)
  @IsInt()
  userSenderId: number;

  @Field(type => Number)
  @IsInt()
  userRecipientId: number;
}
