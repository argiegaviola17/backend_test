import {
  Body,
  Controller,
  Post,
  UseGuards,
} from '@nestjs/common';

import { RolesGuard } from '../common/guards/roles.guard';
import { RequestDTO } from './dto/request.dto';
import { MainService } from './main.service';

@UseGuards(RolesGuard)
@Controller('/')
export class MainController {
  constructor(private readonly mainService: MainService) {}

   

  @Post('message')
  findOne(
    @Body() req: RequestDTO
  ) {
    return this.mainService.process(req);
  }
}
