import { Module } from '@nestjs/common';
import { MangaRepositoryImpl } from '../data/MangaRepositoryImpl';
import { MangaRepository } from '../domain/repository/MangaRepository';
import { GetAllMangasUseCase } from '../domain/usecase/GetAllMangasUseCase';
import { MangaController } from './MangaController';
import { MangaService } from './MangaService';

@Module({
  controllers: [MangaController],
  providers: [
    MangaService,
    GetAllMangasUseCase,
    {
      provide: MangaRepository,
      useClass: MangaRepositoryImpl,
    },
  ],
})
export class MangaModule {}
