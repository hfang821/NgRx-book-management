import { Injectable } from "@angular/core";
//  The ofType operator takes one or more action types as arguments to filter on which actions to act upon.
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as bookActions from "./book.actions";
import { BookService } from "./book.service";
//of keyword is used to return an observable of the error
import { mergeMap, map, catchError, of } from "rxjs";

@Injectable()
export class BookEffects {

    // This is an NgRx effect that responds to 'AddBook' actions.
    addBook$ = createEffect(() => this.actions$.pipe(
        // this effect will only run when the AddBook action is dispatched
        ofType(bookActions.AddBook),

        // For each AddBook action, the book service is called to add the book
        // mergeMap is used to flatten the observable of the book service into one observable (allos multiple concurrent addBook calls)
        mergeMap((action) => this.bookService.addBook(action)
            .pipe(
                // if the addbook call succeeds, map the observables to the AddBookSuccess action
                map(book => bookActions.AddBookSuccess(book)),
                // If the call fails, catchError will return an observable of the AddBookFailure action
                catchError((error) => of(bookActions.AddBookFailure({error})))
            ))
    ))

    constructor(
        private actions$: Actions,
        private bookService: BookService
    ){}
}