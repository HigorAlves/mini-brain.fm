import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { FocusTypes } from './types/musicTypes';

@Controller('tracks')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':type')
  getMusics(@Param('type') type: FocusTypes): Array<string> {
    return this.appService.getMusicNames(type);
  }
}
