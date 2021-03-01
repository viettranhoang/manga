import { Injectable } from '@nestjs/common';
import { GetAllMangasUseCase } from '../domain/usecase/GetAllMangasUseCase';

@Injectable()
export class MangaService {
  constructor(private readonly getAllMangasUseCase: GetAllMangasUseCase) {}

  public getAllMangas(): Promise<string> {
    return this.getAllMangasUseCase.execute();
  }
}
