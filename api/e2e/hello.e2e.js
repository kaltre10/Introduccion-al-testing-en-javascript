const request = require('supertest');

const createApp = require('../src/app');

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

    describe('Test for [get] /', () => {
        test('should Hello World', () => request(app)
            .get('/').expect(200)
            .then(response => {
                expect(response.text).toEqual('Hello World!');
            })
        )

    })

})
