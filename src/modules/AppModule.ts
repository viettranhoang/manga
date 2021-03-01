import { Module } from '@nestjs/common';
import { MangaModule } from './mangas/presentation/MangaModule';
import { SequelizeModule } from '@nestjs/sequelize';
import { GenreModule } from './genres/GenreModule';
import { GenreEntity } from './genres/data/mariadb/model/GenreEntity';

@Module({
  imports: [
    MangaModule,
    GenreModule,
    SequelizeModule.forRoot({
      dialect: 'mariadb',
      host: '116.203.62.125',
      port: 3306,
      username: 'manga4ever',
      password: 'pleasegivemeCokE66668888',
      database: 'manga4ever',
      models: [GenreEntity],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
