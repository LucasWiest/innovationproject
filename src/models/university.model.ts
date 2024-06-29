import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { IsString } from 'class-validator';
import { UserModel } from "./user.model";
import { GroupModel } from "./group.model";

@InputType('UniversityInput', { isAbstract: true })
@ObjectType()
export class UniversityModel {
  @Field(type => String)
  @IsString()
  id: string;

  @Field(type => String)
  @IsString()
  name: string;

  @Field(type => [UserModel])
  users: UserModel[];

  @Field(type => [GroupModel])
  groups: GroupModel[];
}
