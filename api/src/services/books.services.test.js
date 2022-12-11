const BooksService = require('./books.service');
const { generateManyBooks } = require('../fake/books.fake');

// const fakeBooks = [
//   {
//     _id: 1,
//     name: 'Herry Potter',
//   },
// ];

const mockGetAll = jest.fn();

const MongoLibStub = {
  getAll: mockGetAll,
  create: () => {},
};

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

describe('books services', () => {
  let services;
  beforeEach(() => {
    services = new BooksService();

    // limpiar el estado de cada test
    jest.clearAllMocks();
  });

  describe('sould get books all', () => {
    test('sould get books 1', async () => {
      const fakeBooks = generateManyBooks(20);
      mockGetAll.mockResolvedValue(fakeBooks);
      const books = await services.getBooks({});
      console.log(books);
      expect(books.length).toEqual(fakeBooks.length);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });
  });
});
