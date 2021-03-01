import { Injectable } from '@nestjs/common';
import { MangaRepository } from '../repository/MangaRepository';

@Injectable()
export class GetAllMangasUseCase {
  constructor(private readonly mangaRepository: MangaRepository) {}

  public execute(): Promise<string> {
    return this.mangaRepository.getAllMangas();
  }
}
