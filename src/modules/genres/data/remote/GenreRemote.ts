import { HttpService, Injectable } from '@nestjs/common';
import * as cheerio from 'cheerio';
import { Genre } from '../../domain/model/Genre';

@Injectable()
export class GenreRemote {
  constructor(private httpService: HttpService) {}

  async crawlGenresFromMal(): Promise<Genre[]> {
    const response = await this.httpService
      .get('https://myanimelist.net/manga.php')
      .toPromise();
    const $ = cheerio.load(response.data);

    const genres = $('.genre-name-link')
      .map(function () {
        return $(this).attr('href');
      })
      .get()
      .filter((link) => link.includes('/genre/'))
      .map((link) => {
        // "/manga/genre/39/Police"
        const arr = link.replace('/manga/genre/', '').split('/');
        return new Genre(Number(arr[0]), arr[1], arr[1]);
      });
    return genres;
  }
}
