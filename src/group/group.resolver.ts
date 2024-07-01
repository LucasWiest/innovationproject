import { Mutation, Query, Resolver } from "@nestjs/graphql";
import { GroupModel } from "src/models/group.model"; 
import { GroupService } from "./group.service";

@Resolver(_ => GroupModel) 
export class GroupResolver {
    constructor (private readonly group: GroupService) {} 

    @Query(() => [GroupModel])
    getGroups () {
        return this.group.getGroups();
    }
}