import { Controller, Get, Param, StreamableFile } from '@nestjs/common';
import { AppService } from './app.service';
import { createReadStream } from 'fs';
import { join } from 'path';
import { FocusTypes } from './types/musicTypes';

@Controller('tracks')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':type')
  getMusics(@Param('type') type: FocusTypes): Array<string> {
    return this.appService.getMusicNames(type);
  }

  @Get('/:type/:name')
  getFocus(
    @Param('name') name: string,
    @Param('type') type: FocusTypes,
  ): StreamableFile {
    if (name != undefined && type != undefined) {
      const filePath = `src/assets/musics/${type}/${name}`;
      const file = createReadStream(join(process.cwd(), filePath));
      return new StreamableFile(file);
    }
  }
}
