import { generateMockBook } from './book';

describe('dataAccess', () => {
  it('can generate mock book', () => {
    const mock = generateMockBook();
    expect(mock.id).toEqual('1');
  });
});
