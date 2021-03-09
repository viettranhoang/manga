export abstract class MangaRepository {
  abstract getAllMangas(): Promise<string>;

  abstract crawlMangas(): Promise<any>;
}
