import {
  Controller,
  Get,
  Param,
  Post,
  Res,
  StreamableFile,
  Body,
} from '@nestjs/common';
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

  @Post('favorite')
  favoriteMusic(
    @Body('musicName') musicName: string,
    @Res() response,
  ): Array<string> {
    const isSuccess = this.appService.pushFavorite(musicName);

    if (isSuccess) {
      return response.status(201).send();
    }

    return response.status(500).send();
  }
}
