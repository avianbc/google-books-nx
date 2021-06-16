import { newSpecPage } from '@stencil/core/testing';
import { BookComponent } from './book-component';

describe('book-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [BookComponent],
      html: '<book-component></book-component>',
    });
    expect(root).toEqualHtml(`
      <book-component>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </book-component>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [BookComponent],
      html: `<book-component first="Stencil" last="'Don't call me a framework' JS"></book-component>`,
    });
    expect(root).toEqualHtml(`
      <book-component first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </book-component>
    `);
  });
});
