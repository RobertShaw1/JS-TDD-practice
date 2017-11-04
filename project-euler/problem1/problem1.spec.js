const findSumOfMultiples = require('./problem1');
const assert = require('chai').assert;
// const expect = require('chai').expect;
// const should = require('chai').should;

describe('findSumOfMultiples', () => {
  const sum = findSumOfMultiples();

  it('return value should be a number', () => {
    assert.typeOf(sum, 'number')
  });
  it('returns the sum of all multiples 3 or 5 below 1000', () => {
    assert.deepEqual(sum, 233168);
  });
});
