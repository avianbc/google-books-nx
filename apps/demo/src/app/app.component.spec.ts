import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { generateMockBook } from '@nxworkspace/data-access/models';
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

  it('should render a single book', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.componentInstance.books = [
      generateMockBook(),
    ];

    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('book-component')).toBeTruthy();
  });

  it('should render multiple books', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.componentInstance.books = [
      generateMockBook(),
      generateMockBook(),
    ];

    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const renderedBookCount = compiled.querySelectorAll('book-component').length;
    expect(renderedBookCount).toBe(fixture.componentInstance.books.length);
  });
});
