const { sum, multiply, divide } = require('./02-math');

test('sum should 2 + 2 = 4', () => {
  const fun = sum(2, 2);
  expect(fun).toBe(4);
});

test('multiply should 2 * 2 = 4', () => {
  const fun = multiply(2, 2);
  expect(fun).toBe(4);
});

test('divide should 8 / 2 = 4', () => {
  const fun = divide(8, 2);
  expect(fun).toBe(4);

  // divide should 0 / 2 = null
  const fun2 = divide(0, 2);
  expect(fun2).toBeNull();
});
