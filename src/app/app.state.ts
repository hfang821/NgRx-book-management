import { Book } from './models/book';

// AppState is not directly mutable
export interface AppState {
    readonly book: Book[];
};