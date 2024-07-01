import { Controller, Get } from '@nestjs/common';
import { GroupService } from './group.service';

@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Get()
  getGroups() {
    return this.groupService.getGroups();
  }
}
