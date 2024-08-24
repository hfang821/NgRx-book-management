import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() {}

  addBook(book: Book): Observable<Book>{

    // Mocking the error
    // const err = new Error('Error while adding a book')

    // return throwError(() => err);
    // this will return an observable of the book that was added
    return of(book);
  }
}
