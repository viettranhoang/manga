import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { GenreEntity } from './model/GenreEntity';
import { GenreMariaDb } from './GenreMaria';

@Injectable()
export class GenreMariaDbImpl implements GenreMariaDb {
  constructor(
    @InjectModel(GenreEntity)
    private genreEntity: typeof GenreEntity,
  ) {}

  async findAll(): Promise<GenreEntity[]> {
    return this.genreEntity.findAll();
  }

  async save(genre: GenreEntity): Promise<void> {
    await genre.save();
    return;
  }
}
