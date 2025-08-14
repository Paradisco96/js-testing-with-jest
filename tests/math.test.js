import { sum, devide } from '../src/math.js';

describe ('Function sum', () => {
  test('add 3 to 5, result 8', () => { 
  expect(sum(3, 5)).toBe(8);
})

test('add -3 + 5, result 2', () => {
expect(sum(-3, 5)).toBe(2);
});
});

describe ('Function devide', () => {
test('devide 10 / 5, result 2)', () => {
  expect(devide(10, 5)).toBe(2);
});

test('devide 10 / 0, throw ERROR', () => {
  expect(() => devide(10, 0)).toThrow('Zero cannot be a divisor');
  })
})

