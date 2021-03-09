import { MangaRemote } from '../remote/MangaRemote';
import { MangaRepository } from '../../domain/repository/MangaRepository';
import { MangaRepositoryImpl } from '../MangaRepositoryImpl';

export const MangaDataProvider = [
  MangaRemote,
  {
    provide: MangaRepository,
    useClass: MangaRepositoryImpl,
  },
];
