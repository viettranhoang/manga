import { Column, Model, Table } from 'sequelize-typescript';

@Table({
  timestamps: false,
  tableName: 'genre',
})
export class GenreEntity extends Model<GenreEntity> {
  @Column({ field: 'mal_id' })
  malId: number;

  @Column
  name: string;

  @Column
  slug: string;
}
