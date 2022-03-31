import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { join } from 'path';
import { FocusTypes } from './types/musicTypes';

@Injectable()
export class AppService {
  private _favoriteMusics: Array<string>;

  constructor() {
    this._favoriteMusics = [];
  }

  getMusicNames(type: FocusTypes): Array<string> {
    const folderPath = join(process.cwd(), `src/assets/musics/${type}`);
    return fs.readdirSync(folderPath);
  }

  pushFavorite(musicName: string): Array<string> {
    if (this._favoriteMusics.length === 0) {
      const isFavorited = this._favoriteMusics.find(
        (element) => element === musicName,
      );
      if (!isFavorited) {
        this._favoriteMusics.push(musicName);
      }
    }

    return this._favoriteMusics;
  }
}
