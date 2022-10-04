const stringLength = require('./stringLength');

it('String Samuel should return: 6', () => {
  expect(stringLength('Samuel')).toBe(6);
});

it('String should be at least one character', () => {
  expect(stringLength('str')).not.toBeLessThan(1);
});

it('String should not be longer than 10', () => {
  expect(stringLength('str')).not.toBeGreaterThan(10);
});
