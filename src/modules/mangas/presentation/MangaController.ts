import { Controller, Get } from '@nestjs/common';
import { MangaService } from './MangaService';

@Controller('mangas')
export class MangaController {
  constructor(private readonly mangaService: MangaService) {}

  @Get()
  async getHello(): Promise<string> {
    return await this.mangaService.getAllMangas();
  }

  @Get('/crawl')
  async crawl(): Promise<any> {
    return this.mangaService.crawlMangas();
  }
}
