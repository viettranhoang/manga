import { Injectable } from '@nestjs/common';
import { Genre } from '../model/Genre';
import { GenreRepository } from '../repository/GenreRepository';
import { AppError } from '../../../../shared/core/AppError';
import { Either, left, Result, right } from '../../../../shared/core/Result';
import { UseCase } from '../../../../shared/core/UseCase';

export interface GetAllGenresRequestDTO {
  offset?: number;
  limit?: number;
}

type Response = Either<AppError.UnexpectedError, Result<Genre[]>>;

@Injectable()
export class GetAllGenresUseCase
  implements UseCase<GetAllGenresRequestDTO, Promise<Response>> {
  constructor(private readonly genreRepository: GenreRepository) {}

  async execute(req: GetAllGenresRequestDTO): Promise<Promise<Response>> {
    try {
      const genres = await this.genreRepository.getAllGenres(
        req.offset,
        req.limit,
      );
      return right(Result.ok<Genre[]>(genres));
    } catch (err) {
      return left(new AppError.UnexpectedError(err));
    }
  }
}
