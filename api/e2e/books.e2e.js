const request = require('supertest');
const mockGetAll = jest.fn();
const createApp = require('../src/app');
const { generateManyBooks } = require('../src/fake/books.fake');


jest.mock('../src/lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
    getAll: mockGetAll,
    create: () => {},
})));

describe('Test for Hello  endpoint', () => {
    let app = null;
    let server = null;
    beforeAll( () => {
        app = createApp();
        server = app.listen(3001);
    })

    afterAll( async () => {
        await server.close();
    })

    describe('Test for [get] /api/v1/books', () => {
        test('should a list books', () => {

            const fakeBooks = generateManyBooks(3);
            mockGetAll.mockResolvedValue(fakeBooks);

            return request(app)
                    .get('/api/v1/books').expect(200)
                    .then(({ body }) => {
                        console.log(body);
                        expect(body.length).toEqual(fakeBooks.length);
                    })
        });
    })

})
