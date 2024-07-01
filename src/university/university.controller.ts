import { Controller, Get } from '@nestjs/common';
import { UniversityService } from './university.service';

@Controller('university')
export class UniversityController {
  constructor(private readonly uniService: UniversityService) {}

  @Get()
  getUniversity() {
    return this.uniService.getUniversity();
  }
}
