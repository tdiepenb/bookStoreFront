import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root',
})
export class BookstoreService {
  response: Book = new Book();
  errorMessage: string = '';

  constructor(private _http: HttpClient) {}

  getBooksFromServer(): Observable<any> {
    return this._http.get<any>('http://localhost:8080/bookStore');
  }

  postBookToServer(book: Book): Observable<any> {
    return this._http.post<any>('http://localhost:8080/bookStore', book);
  }

  deleteBookFromServer(id: number): Observable<any> {
    return this._http.delete(`http://localhost:8080/bookStore/${id}`);
  }

  getOldestBookFromServer(): Observable<any> {
    return this._http.get<any>('http://localhost:8080/bookStore/oldestBook');
  }

  getMostRecentBookFromServer(): Observable<any> {
    return this._http.get<any>(
      'http://localhost:8080/bookStore/mostRecentBook'
    );
  }
}
