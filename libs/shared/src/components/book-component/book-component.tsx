import { Component, Prop, h } from '@stencil/core';

import { Book } from '@nxworkspace/data-access/models';

@Component({
  tag: 'book-component',
  styleUrl: 'book-component.scss',
  shadow: true,
})
export class BookComponent {
  /**
   * The book to display
   */
  @Prop() book: Book;

  render() {
    return (
      <div class="p-6">
        <div class="max-w-md bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div class="md:flex">
            <div class="md:flex-shrink-0">
              <img
                class="h-48 w-full object-cover md:h-full md:w-48"
                src={this.book?.volumeInfo?.imageLinks.smallThumbnail}
              ></img>
            </div>
            <div class="p-4">
              <div class="uppercase tracking-wide text-sm font-semibold">
                <p>{this.book.volumeInfo?.title}</p>
                <small>{this.book.volumeInfo?.subtitle}</small>
              </div>
              <p class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                {this.book.volumeInfo?.authors.map((a) => a + ',')}
              </p>
              <p class="mt-2 text-gray-500">
                {this.book.searchInfo?.textSnippet}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
