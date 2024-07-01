import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { IsString, IsEmail } from 'class-validator';
import { CourseModel } from "./course.model";
import { UniversityModel } from "./university.model";
import { MessageModel } from "./message.model";
import { GroupUserModel } from "./group-user.model";

@InputType('UserInput', { isAbstract: true })
@ObjectType()
export class UserModel {
  @Field(type => String)
  @IsString()
  id: string;

  @Field(type => String)
  @IsString()
  name: string;

  @Field(type => String)
  @IsEmail()
  email: string;

  @Field(type => CourseModel)
  course: CourseModel;

  @Field(type => UniversityModel)
  university: UniversityModel;

  @Field(type => [MessageModel])
  sentMessages: MessageModel[];

  @Field(type => [MessageModel])
  receivedMessages: MessageModel[];

  @Field(type => [GroupUserModel])
  groupUsers: GroupUserModel[];
}
