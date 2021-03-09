import { HttpModule, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { GenreDataProvider } from './data/di/GenreDataProvider';
import { GenreEntity } from './data/mariadb/model/GenreEntity';
import { GetAllGenresUseCase } from './domain/usecase/GetAllGenresUseCase';
import { GenreController } from './presentation/GenreController';
import { GenreService } from './presentation/GenreService';
import { SaveGenresUseCase } from './domain/usecase/SaveGenresUseCase';
import { CrawlGenresUseCase } from './domain/usecase/CrawlGenresUseCase';

@Module({
  imports: [SequelizeModule.forFeature([GenreEntity]), HttpModule],
  controllers: [GenreController],
  providers: [
    ...GenreDataProvider,
    GenreService,
    GetAllGenresUseCase,
    SaveGenresUseCase,
    CrawlGenresUseCase,
  ],
})
export class GenreModule {}
