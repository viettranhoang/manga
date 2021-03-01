import { Injectable } from '@nestjs/common';
import { Genre } from '../model/Genre';
import { GenreRepository } from '../repository/GenreRepository';

@Injectable()
export class SaveGenresUseCase {
  constructor(private readonly genreRepository: GenreRepository) {}

  public execute(): Promise<void> {
    const genre = new Genre(5, 'ds', 'sdd');
    return this.genreRepository.saveGenre(genre);
  }
}
