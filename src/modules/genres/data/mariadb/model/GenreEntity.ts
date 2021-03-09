import {Column, DataType, Model, Table} from 'sequelize-typescript';
import SequelizeSlugify from 'sequelize-slugify';
@Table({
  timestamps: false,
  tableName: 'genre',
})
export class GenreEntity extends Model<GenreEntity> {
  @Column({ field: 'mal_id' })
  malId: number;

  @Column
  name: string;

  @Column({
    type: DataType.STRING,
    unique: true,
  })
  slug: string;
}
