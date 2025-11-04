const { add, subtract, multiply, divide } = require('../src/calculator');

test('add: 2 + 3 = 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('subtract: 5 - 2 = 3', () => {
  expect(subtract(5, 2)).toBe(3);
});

test('multiply: 4 * 3 = 12', () => {
  expect(multiply(4, 3)).toBe(12);
});

test('divide: 10 / 2 = 5', () => {
  expect(divide(10, 2)).toBe(5);
});
