import { Mutation, Query, Resolver } from "@nestjs/graphql";
import { UserModel } from "src/models/user.model";
import { UserService } from "./user.service";

@Resolver(_ => UserModel) 
export class UserResolver {
    constructor (private readonly userServices: UserService) {} 

    @Query(() => [UserModel])
    getUsers () {
        return this.userServices.getUsers();
    }
}