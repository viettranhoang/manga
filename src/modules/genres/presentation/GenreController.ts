import { Controller, Get, Req } from '@nestjs/common';
import { GenreService } from './GenreService';
import { GetAllGenresResponseDTO } from './model/GetAllGenresResponseDTO';

@Controller('genres')
export class GenreController {
  constructor(private readonly appService: GenreService) {}

  @Get()
  async getAllGenres(@Req() req): Promise<GetAllGenresResponseDTO> {
    return this.appService.getAllGenres(req);
  }

  @Get('/crawl')
  async crawl(): Promise<any> {
    return this.appService.crawlGenres();
  }
}
