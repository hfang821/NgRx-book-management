import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { AddBook, RemoveBook } from '../books/book.actions';
import { AppState } from '../app.state';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  books$: Observable<Book[]>;

  constructor(private store: Store<AppState>){
    // the observable is defined as an instance of the NgRx store, and pipe allows you to transform the data stream, and select a slice of state (books) from the store.
    this.books$ = store.pipe(select('book'));
  }

  addBook(id: string, title: string, author: string){
    this.store.dispatch(AddBook({id, title, author}));
  }

  removeBook(bookId: string){
    this.store.dispatch(RemoveBook({bookId}));
  }
}
