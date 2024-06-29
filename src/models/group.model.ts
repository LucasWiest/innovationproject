import { Field, ObjectType, InputType, Int } from "@nestjs/graphql";
import { IsString, IsInt } from 'class-validator';
import { CourseModel } from "./course.model";
import { UniversityModel } from "./university.model";
import { GroupUserModel } from "./group-user.model";

@InputType('GroupInput', { isAbstract: true })
@ObjectType()
export class GroupModel {
  @Field(type => Int)
  @IsInt()
  id: number;

  @Field(type => String)
  @IsString()
  name: string;

  @Field(type => CourseModel)
  course: CourseModel;

  @Field(type => UniversityModel)
  university: UniversityModel;

  @Field(type => [GroupUserModel])
  groupUsers: GroupUserModel[];
}
