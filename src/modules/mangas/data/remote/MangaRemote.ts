import { HttpService, Injectable } from '@nestjs/common';
import * as cheerio from 'cheerio';
import { Manga } from '../../domain/model/Manga';
import { tryCatch } from 'rxjs/internal-compatibility';

@Injectable()
export class MangaRemote {
  constructor(private httpService: HttpService) {}

  async crawlMangasFromMal(): Promise<any> {
    const response = await this.httpService
      .get('https://myanimelist.net/topmanga.php')
      .toPromise();
    const $ = cheerio.load(response.data);

    const mangaLinks = $('.ranking-list')
      .map((_, element) => {
        const link = $(element).find('.hoverinfo_trigger').attr('href');
        return link;
      })
      .get();

    const arr: Array<any> = [];

    const manga = await this.crawlOnePage(mangaLinks[0]);
    arr.push(manga);

    // for (const link of mangaLinks) {
    //   const manga = await this.crawlOnePage(link);
    //   arr.push(manga);
    // }
    return arr;
  }

  async crawlOnePage(urlPage: string): Promise<any> {
    const response = await this.httpService.get(urlPage).toPromise();
    const $ = cheerio.load(response.data);

    const name = $('.h1-title').text();
    const names = $('.spaceit_pad')
      .map((index, element) => {
        return $(element).text();
      })
      .get();

    let nameEnglish = '';
    try {
      nameEnglish = names
        .filter((value) => value.includes('English'))[0]
        .replace('English:', '')
        .trim();
    } catch (e) {}

    let nameSynonyms = '';
    try {
      nameSynonyms = names
        .filter((value) => value.includes('Synonyms'))[0]
        .replace('Synonyms:', '')
        .trim();
    } catch (e) {}

    let nameJapanese = '';
    try {
      nameJapanese = names
        .filter((value) => value.includes('Japanese'))[0]
        .replace('Japanese:', '')
        .trim();
    } catch (e) {}

    const malScore = $('.anime-detail-header-stats .score-label').text();
    const malUserScored = $('.anime-detail-header-stats .fl-l')
      .attr('data-user')
      .replace(' users', '')
      .replace(',', '');

    const malRank = $('.anime-detail-header-stats .ranked strong')
      .text()
      .replace('#', '');

    const background = $('.description').text();
    const overview = $('tbody').attr('itemprop', 'description').text();
    console.log(overview);

    return overview;
  }
}
