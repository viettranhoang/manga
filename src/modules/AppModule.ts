import { Module } from '@nestjs/common';
import { MangaModule } from './mangas/MangaModule';
import { SequelizeModule } from '@nestjs/sequelize';
import { GenreModule } from './genres/GenreModule';
import { GenreEntity } from './genres/data/mariadb/model/GenreEntity';

@Module({
  imports: [
    MangaModule,
    GenreModule,
    SequelizeModule.forRoot({
      dialect: 'mariadb',
      host: 'localhost',
      port: 9000,
      username: 'vit',
      password: 'root',
      database: 'mysql',
      models: [GenreEntity],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
