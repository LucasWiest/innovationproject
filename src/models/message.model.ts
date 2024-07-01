import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { IsDate, IsString } from 'class-validator';
import { UserModel } from "./user.model";

@InputType('MessageInput', { isAbstract: true })
@ObjectType()
export class MessageModel {
  @Field(type => String)
  @IsString()
  id: string;

  @Field(type => String)
  @IsString()
  text: string;

  @Field(type => Date) 
  @IsDate()
  date: Date;

  @Field(type => UserModel)
  sender: UserModel;

  @Field(type => UserModel)
  recipient: UserModel;
}
