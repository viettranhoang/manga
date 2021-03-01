import { Genre } from '../../domain/model/Genre';
import { GenreDTO } from './GenreDTO';

export class GenreDTOMapper {
  public static mapToDTO(model: Genre): GenreDTO {
    return {
      name: model.name,
    };
  }
}
