function findSumOfMultiples() {
  let sum = 0;
  let i = 0;

  while(i < 1000) {
    if(i % 3 === 0 || i % 5 === 0) sum += i;
    i++;
  }
  return sum;
}

module.exports = findSumOfMultiples;
