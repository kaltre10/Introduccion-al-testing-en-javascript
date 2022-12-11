const { faker } = require('@faker-js/faker');

const generateOneBook = () => ({
  _id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
});

const generateManyBooks = (size = 10) => {
    const books = [];
    for (let i = 0; i < size; i++) {
        books.push(generateOneBook());
    }
    return [...books];
}

module.exports = { generateOneBook, generateManyBooks };
