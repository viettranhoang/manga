import { Injectable } from '@nestjs/common';
import { MangaRepository } from '../domain/repository/MangaRepository';
import { MangaRemote } from './remote/MangaRemote';

@Injectable()
export class MangaRepositoryImpl implements MangaRepository {
  constructor(private readonly mangaRemote: MangaRemote) {}

  async getAllMangas(): Promise<string> {
    return await ' Hello clean architecture';
  }

  crawlMangas(): Promise<any> {
    return this.mangaRemote.crawlMangasFromMal();
  }
}
