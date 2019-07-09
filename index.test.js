const { mult, large } = require('./index');

describe('m u l t i p l y', () => {
  it('multiples numbers', () => {
    const newArray = mult(2);
    expect(newArray).toEqual([4, 6, 8, 10, 12, 14, 16, 18, 20]);
  });
});


describe('big numbers', () => {
  it('will yeild a large', () => {
    const zero = largestSum([-8, 0]);
    expect(zero).toEqual(0);
  });
});
