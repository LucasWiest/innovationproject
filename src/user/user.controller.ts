import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { UserModel } from 'src/models/user.model';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }
}
