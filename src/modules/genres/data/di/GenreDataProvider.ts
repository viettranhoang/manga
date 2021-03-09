import { GenreRepository } from '../../domain/repository/GenreRepository';
import { GenreRepositoryImpl } from '../GenreRepositpryImpl';
import { GenreMariaDbImpl } from '../mariadb/GenreMariaDbImpl';
import { GenreMariaDb } from '../mariadb/GenreMaria';
import { GenreRemote } from '../remote/GenreRemote';

export const GenreDataProvider = [
  GenreRemote,
  {
    provide: GenreRepository,
    useClass: GenreRepositoryImpl,
  },
  {
    provide: GenreMariaDb,
    useClass: GenreMariaDbImpl,
  },
];
