import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render books', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.componentInstance.books = [
      {
        id: '1',
        volumeInfo: {
          title: 'title',
          subtitle: 'subtitle',
          authors: ['author1', 'author2'],
          publisher: 'publisher',
          publishedDate: 'publishedDate',
          description: 'description',
          imageLinks: {
            thumbnail: 'thumbnail',
            smallThumbnail: 'smallThumbnail',
          },
        },
        searchInfo: {
          textSnippet: 'textSnippet',
        }
      }
    ];

    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('book-component')).toBeTruthy();
  });
});
