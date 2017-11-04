const findSumOfEvenFibonacci = require('./problem2');
const assert = require('chai').assert;
const expect = require('chai').expect;
// const should = require('chai').should;

describe('findSumOfEvenFibonacci', () => {
  const sum = findSumOfEvenFibonacci();

  it('return value should be a number', () => {
    assert.typeOf(sum, 'number')
  });
  it('return value should be an even number', () => {
    expect(sum % 2).to.equal(0);
  });
  it('returns the sum of all even fibonacci terms below four million', () => {
    assert.deepEqual(sum, 4613732);
  });
});
