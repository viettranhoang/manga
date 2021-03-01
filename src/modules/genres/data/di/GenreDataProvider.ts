import { GenreRepository } from '../../domain/repository/GenreRepository';
import { GenreRepositoryImpl } from '../GenreRepositpryImpl';
import { GenreMariaDbImpl } from '../mariadb/GenreMariaDbImpl';
import { GenreMariaDb } from '../mariadb/GenreMaria';

export const GenreDataProvider = [
  {
    provide: GenreRepository,
    useClass: GenreRepositoryImpl,
  },
  {
    provide: GenreMariaDb,
    useClass: GenreMariaDbImpl,
  },
];
