import { HttpModule, Module } from '@nestjs/common';
import { GetAllMangasUseCase } from './domain/usecase/GetAllMangasUseCase';
import { MangaController } from './presentation/MangaController';
import { MangaService } from './presentation/MangaService';
import { MangaDataProvider } from './data/di/MangaDataProvider';
import { CrawlMangasUseCase } from './domain/usecase/CrawlMangasUseCase';

@Module({
  imports: [HttpModule],
  controllers: [MangaController],
  providers: [
    ...MangaDataProvider,
    MangaService,
    GetAllMangasUseCase,
    CrawlMangasUseCase,
  ],
})
export class MangaModule {}
