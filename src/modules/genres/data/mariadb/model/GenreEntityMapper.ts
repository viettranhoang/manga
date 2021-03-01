import { Genre } from '../../../domain/model/Genre';
import { GenreEntity } from './GenreEntity';

export class GenreEntityMapper {
  public static mapToDomain(model: GenreEntity): Genre {
    return new Genre(model.malId, model.name, model.slug);
  }

  public static mapToEntity(model: Genre): GenreEntity {
    const entity = new GenreEntity();
    entity.malId = model.malId;
    entity.name = model.name;
    entity.slug = model.slug;
    return entity;
  }

  public static mapToEntityList(models: Genre[]): GenreEntity[] {
    return models.map((item) => this.mapToEntity(item));
  }

  public static mapToDomainList(models: GenreEntity[]): Genre[] {
    return models.map((item) => this.mapToDomain(item));
  }
}
