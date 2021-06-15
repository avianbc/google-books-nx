import { generateMockBook } from './book';

describe('dataAccess', () => {
  it('should work', () => {
    const mock = generateMockBook();
    expect(mock.id).toEqual('1');
  });
});
