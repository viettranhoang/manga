export class Genre {
  malId: number;
  name: string;
  slug: string;

  constructor(malId: number, name: string, slug: string) {
    this.malId = malId;
    this.name = name;
    this.slug = slug;
  }
}
