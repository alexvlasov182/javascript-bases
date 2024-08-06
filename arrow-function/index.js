const uniqueArray = (arr) => [...new Set(arr)];

// Example usage
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = uniqueArray(numbers);

console.log(uniqueNumbers);

const uniqueArrayLoops = (arr) => {
  const result = [];
  const seen = new Set();

  for (const item of arr) {
    if (!seen.has(item)) {
      seen.add(item);
      result.push(item);
    }
  }
  return result;
};

const numbersLoop = [20, 20, 30, 40, 50, 50, 50, 60, 60, 70];
const uniqueNumbersLoops = uniqueArrayLoops(numbersLoop);
console.log(uniqueNumbersLoops);
