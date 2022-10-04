const stringLength = require('./stringLength');

test('String Samuel should return: 6', () => {
  expect(stringLength('Samuel')).toBe(6);
});

test('String should be at leasst one character', () => {
  expect(stringLength('')).toBe(0);
});

test('String should not be longer than 10', () => {
  expect(stringLength('Samuel Munyi')).toBe(10);
});
