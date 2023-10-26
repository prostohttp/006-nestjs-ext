import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  private books: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  getBooks(): any[] {
    return this.books;
  }
}
