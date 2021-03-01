import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class MangaRepository {
  abstract getAllMangas(): Promise<string>;
}
