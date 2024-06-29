import { Field, ObjectType, InputType, Int } from "@nestjs/graphql";
import { IsInt } from 'class-validator';
import { UserModel } from "./user.model";
import { GroupModel } from "./group.model";

@InputType('GroupUserInput', { isAbstract: true })
@ObjectType()
export class GroupUserModel {
  @Field(type => Int)
  @IsInt()
  userId: number;

  @Field(type => Int)
  @IsInt()
  groupId: number;

  @Field(type => UserModel)
  user: UserModel;

  @Field(type => GroupModel)
  group: GroupModel;
}
