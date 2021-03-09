import { Injectable } from '@nestjs/common';
import { GetAllMangasUseCase } from '../domain/usecase/GetAllMangasUseCase';
import { CrawlGenresUseCase } from '../../genres/domain/usecase/CrawlGenresUseCase';
import { CrawlMangasUseCase } from '../domain/usecase/CrawlMangasUseCase';

@Injectable()
export class MangaService {
  constructor(
    private readonly getAllMangasUseCase: GetAllMangasUseCase,
    private readonly crawlMangasUseCase: CrawlMangasUseCase,
  ) {}

  public getAllMangas(): Promise<string> {
    return this.getAllMangasUseCase.execute();
  }

  crawlMangas(): Promise<any> {
    return this.crawlMangasUseCase.execute();
  }
}
