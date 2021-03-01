import { Injectable } from '@nestjs/common';
import { MangaRepository } from '../domain/repository/MangaRepository';

@Injectable()
export class MangaRepositoryImpl implements MangaRepository {
  async getAllMangas(): Promise<string> {
    return await ' Hello clean architecture';
  }
}
