import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { IsString } from 'class-validator';
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

  @Field(type => UserModel)
  user: UserModel;
}
