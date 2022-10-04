const { add, subtract, multiply, divide } = require('./Calculator'),
  sum = add(4, 2),
  subraction = subtract(4, 2),
  multiplication = multiply(4, 2),
  division = divide(4, 2);

describe('My Calculator', () => {
  test('4 plus 2 should be 2', () => {
    expect(sum).toBe(6);
  });

  test('4 minus 2 should be 2', () => {
    expect(subraction).toBe(2);
  });

  test('4 multiply 2 should be 8', () => {
    expect(multiplication).toBe(8);
  });

  test('4 divide 2 should be 2', () => {
    expect(division).toBe(2);
  });
});
