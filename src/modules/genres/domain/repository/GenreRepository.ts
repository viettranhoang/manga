import { Genre } from '../model/Genre';

export abstract class GenreRepository {
  abstract getAllGenres(offset?: number, limit?: number): Promise<Genre[]>;

  abstract saveGenre(genres: Genre): Promise<void>;

  abstract crawlGenres(): Promise<any>;
}
