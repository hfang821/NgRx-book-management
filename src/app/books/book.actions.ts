import { createAction, props } from "@ngrx/store";
import { Book } from "../models/book";

/* 
Actions: describe unique events that are dispatched from components and services.
---------------------------------------
First Parameter: [Source] Action Type

This is a string that uniquely identifies the action. It usually follows the format [Source] Action Type, where:
This string does not provide any functionality by itself; it is used to uniquely identify the action type.
---------------------------------------
Second Parameter: props<>() Function

The props<>() function is used to define the payload of the action. It specifies the shape of the data that the action will carry.
The props function takes a generic type parameter that defines the structure of the payload. For example, props<{ payload: any }>() indicates that the action will carry an object with a payload property of type any.
---------------------------------------
*/

export const AddBook = createAction('[Book] Add Book', props<Book>());
export const AddBookSuccess = createAction('[Book] Added Book Successfully', props<Book>());
export const AddBookFailure = createAction('[Book] Add book failure', props<{error: any}>());


export const RemoveBook = createAction('[Book] Remove Book', props<{bookId: string}>());