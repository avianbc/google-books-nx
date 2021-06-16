import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GoogleBooksApiService } from '@nxworkspace/data-access/google-books-api';
import { Book } from '@nxworkspace/data-access/models';

@Component({
  selector: 'nxworkspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  searchQuery = new FormControl('');
  books: Book[] = [];

  constructor(
    private googleBooksApiService: GoogleBooksApiService,
  ) {
  }

  search(searchQuery: string) {
    this.googleBooksApiService.searchBooks(searchQuery)
      .subscribe(response => this.books = response);
  }

  toggleDarkMode() {
    const light = document.querySelector('.light');
    const dark = document.querySelector('.dark');
    if (light) {
      light.classList.remove('light');
      light.classList.add('dark');
    } else {
      dark?.classList.remove('dark');
      dark?.classList.add('light');
    }


  }
}
