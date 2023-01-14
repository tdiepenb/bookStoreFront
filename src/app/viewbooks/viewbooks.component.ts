import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookstoreService } from '../bookstore.service';
import { Book } from '../book';

@Component({
  selector: 'app-viewbooks',
  templateUrl: './viewbooks.component.html',
  styleUrls: ['./viewbooks.component.css'],
})
export class ViewbooksComponent implements OnInit {
  books: Array<Book> = [];
  oldestBook: Book = new Book();
  mostRecentBook: Book = new Book();

  constructor(private _service: BookstoreService, private _route: Router) {}
  ngOnInit(): void {
    this.getBooks();
    this.getOldestBook();
    this.getMostRecentBook();
  }

  getBooks() {
    this._service.getBooksFromServer().subscribe((data) => (this.books = data));
  }

  getOldestBook() {
    this._service
      .getOldestBookFromServer()
      .subscribe((data) => (this.oldestBook = data));
  }

  getMostRecentBook() {
    this._service
      .getMostRecentBookFromServer()
      .subscribe((data) => (this.mostRecentBook = data));
  }

  deleteBook(id: number) {
    this._service.deleteBookFromServer(id).subscribe((data) => {
      console.log(data);
      this.ngOnInit();
    });
  }

  RedirectToAddBook() {
    this._route.navigate(['/addbook']);
  }
}
