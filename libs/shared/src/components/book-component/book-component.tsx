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

  private truncate(input: string, length: number) {
    return input?.length > length ? input.substring(0, length) + "..." : input;
  }

  render() {
    return (
      <div class="flex">
        <div>
          <img class="float-left" src={this.book?.volumeInfo?.imageLinks?.thumbnail}></img>
        </div>
        <div class="ml-4">
          <div class="text-xl mb-2">
            <a target="_blank" class="mb-2" href={this.book?.volumeInfo?.previewLink ?? this.book?.volumeInfo?.infoLink}>{this.book?.volumeInfo?.title}</a>
          </div>
          <div class="text-lg mb-2">{this.truncate(this.book?.volumeInfo?.subtitle, 100)}</div>
          <div class="text-xs text-blue-600 mb-2">
            {this.book?.volumeInfo?.authors?.map((author, index) => (index ? ' · ' : '') + author) ?? 'No author'}
          </div>
          <div>
            {this.truncate(this.book?.searchInfo?.textSnippet ?? this.book?.volumeInfo?.description, 250)}
          </div>
        </div>
      </div>
    );
  }
}
