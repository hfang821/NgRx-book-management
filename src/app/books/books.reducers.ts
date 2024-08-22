import { createReducer, on } from "@ngrx/store";
import { AddBook, RemoveBook } from "./book.actions";
import { Book } from "../models/book";

/* 
Reducers: Reducers copy current state and apply a dispatched action to the copy to create a new state.
Takes in: Actions + Current State => New State
---------------------------------------

---------------------------------------
*/

// Reducers always need an initial state    
export const initalState: Book[] = [];

export const BookReducer =  createReducer(
    initalState,
    // when AddBook action is dispatched, take the current state,  create a new array with the new book added to it, and return the new array
    on(AddBook, (state, { id, title, author}) => [...state, {id, title, author}]),
    on(RemoveBook, (state, {bookId}) => state.filter(book => book.id !== bookId))
)