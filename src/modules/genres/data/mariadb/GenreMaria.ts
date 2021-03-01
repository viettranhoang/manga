import { GenreEntity } from './model/GenreEntity';

export abstract class GenreMariaDb {
  abstract findAll(): Promise<GenreEntity[]>;

  abstract save(genre: GenreEntity): Promise<void>;
}
