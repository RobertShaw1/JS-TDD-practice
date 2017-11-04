function findSumOfEvenFibonacci() {
  let sum = 0;
  let fibSequence = {
    prev: 1,
    value: 2,
  }

  let isEven = function(num) {
    return num % 2 === 0;
  }

  while(fibSequence.value < 4000000) {
    if(isEven(fibSequence.prev)) sum += fibSequence.prev;
    if(isEven(fibSequence.value)) sum += fibSequence.value;

    fibSequence.prev += fibSequence.value;
    fibSequence.value += fibSequence.prev;
  }

  return sum;
}

module.exports = findSumOfEvenFibonacci;
