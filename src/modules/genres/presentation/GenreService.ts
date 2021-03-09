import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {
  GetAllGenresRequestDTO,
  GetAllGenresUseCase,
} from '../domain/usecase/GetAllGenresUseCase';
import { SaveGenresUseCase } from '../domain/usecase/SaveGenresUseCase';
import { Request } from 'express';
import { GenreDTOMapper } from './model/GenreDTOMapper';
import { GetAllGenresResponseDTO } from './model/GetAllGenresResponseDTO';
import { CrawlGenresUseCase } from '../domain/usecase/CrawlGenresUseCase';

@Injectable()
export class GenreService {
  constructor(
    private readonly getAllGenresUseCase: GetAllGenresUseCase,
    private readonly saveGenresUseCase: SaveGenresUseCase,
    private readonly crawlGenresUseCase: CrawlGenresUseCase,
  ) {}

  async getAllGenres(req: Request): Promise<GetAllGenresResponseDTO> {
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
        const genres = result.value.getValue();

        return {
          genres: genres.map((it) => GenreDTOMapper.mapToDTO(it)),
        };
      }
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  crawlGenres(): Promise<any> {
    return this.crawlGenresUseCase.execute();
  }
}
