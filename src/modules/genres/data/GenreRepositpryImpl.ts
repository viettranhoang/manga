import { Injectable } from '@nestjs/common';
import { Genre } from '../domain/model/Genre';
import { GenreRepository } from '../domain/repository/GenreRepository';
import { GenreEntityMapper } from './mariadb/model/GenreEntityMapper';
import { GenreMariaDb } from './mariadb/GenreMaria';

@Injectable()
export class GenreRepositoryImpl implements GenreRepository {
  constructor(private readonly genreMariaDb: GenreMariaDb) {}

  async saveGenre(genre: Genre): Promise<void> {
    await this.genreMariaDb.save(GenreEntityMapper.mapToEntity(genre));
    return;
  }

  async getAllGenres(): Promise<Genre[]> {
    return (await this.genreMariaDb.findAll()).map((item) =>
      GenreEntityMapper.mapToDomain(item),
    );
  }
}
