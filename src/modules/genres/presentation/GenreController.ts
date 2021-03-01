import { Controller, Get, Req, Res } from '@nestjs/common';
import { GenreService } from './GenreService';
import { GenreDTO } from './model/GenreDTO';

@Controller('genres')
export class GenreController {
  constructor(private readonly appService: GenreService) {}

  @Get()
  async getAllGenres(@Req() req): Promise<GenreDTO[]> {
    return this.appService.getAllGenres(req);
  }

  @Get('/save')
  async save(): Promise<void> {
    return await this.appService.saveGenres();
  }
}
