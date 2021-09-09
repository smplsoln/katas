const conditionalSum = function (values, condition) {
  // Your code here
  let isEven = 'even' === condition ? true : false;
  let isOdd = 'odd' === condition ? true : false;
  if (!isEven && !isOdd) {
    return 0;
  }
  if ((undefined === values) || (null === values)
    || (!Array.isArray(values)) || values.length < 1) {
    return 0;
  }

  let sum = 0;
  for (const num of values) {
    let numIsEvenOrOdd = (num % 2 === 0);
    if ((isEven && numIsEvenOrOdd) || (isOdd && !numIsEvenOrOdd)) {
      sum += num;
    }
  }
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
console.log(conditionalSum(undefined, "odd"));
console.log(conditionalSum(null, "odd"));
console.log(conditionalSum([], "odder"));
console.log(conditionalSum(4, "odd"));
console.log(conditionalSum('abc', "odd"));
console.log(conditionalSum("abc", "odd"));
console.log(conditionalSum('abc', "even"));
