import { Injectable } from '@nestjs/common';
import { Genre } from '../model/Genre';
import { GenreRepository } from '../repository/GenreRepository';

@Injectable()
export class CrawlGenresUseCase {
  constructor(private readonly genreRepository: GenreRepository) {}

  public execute(): Promise<any> {
    return this.genreRepository.crawlGenres();
  }
}
