import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { GetAllGenresUseCase } from '../domain/usecase/GetAllGenresUseCase';
import { SaveGenresUseCase } from '../domain/usecase/SaveGenresUseCase';
import { GetAllGenresRequestDTO } from '../domain/usecase/GetAllGenresRequestDTO';
import { Request } from 'express';
import { GenreDTO } from './model/GenreDTO';
import { GenreDTOMapper } from './model/GenreDTOMapper';

@Injectable()
export class GenreService {
  constructor(
    private readonly getAllGenresUseCase: GetAllGenresUseCase,
    private readonly saveGenresUseCase: SaveGenresUseCase,
  ) {}

  async getAllGenres(req: Request): Promise<GenreDTO[]> {
    const dto: GetAllGenresRequestDTO = {
      offset: Number(req.query.offset),
      limit: Number(req.query.limit),
    };

    try {
      const result = await this.getAllGenresUseCase.execute(dto);

      if (result.isLeft()) {
        const error = result.value;

        switch (error.constructor) {
          default:
            throw new HttpException(
              error.errorValue().message,
              HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
      } else {
        const genres = result.value
          .getValue()
          .map((it) => GenreDTOMapper.mapToDTO(it));

        return genres;
      }
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  saveGenres(): Promise<void> {
    return this.saveGenresUseCase.execute();
  }
}
