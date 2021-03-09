import { Injectable } from '@nestjs/common';
import { MangaRepository } from '../repository/MangaRepository';

@Injectable()
export class CrawlMangasUseCase {
  constructor(private readonly mangaRepository: MangaRepository) {}

  public execute(): Promise<any> {
    return this.mangaRepository.crawlMangas();
  }
}
