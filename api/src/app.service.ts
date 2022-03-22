import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { join } from 'path';
import { FocusTypes } from './types/musicTypes';

@Injectable()
export class AppService {
  getMusicNames(type: FocusTypes): Array<string> {
    const folderPath = join(process.cwd(), `src/assets/musics/${type}`);
    return fs.readdirSync(folderPath);
  }
}
