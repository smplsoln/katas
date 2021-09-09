const sumLargestNumbers = function (data) {
  // Put your solution here
  if (null === data || undefined === data || !Array.isArray(data)) {
    return null;
  } else if (data.length < 1) {
    return 0;
  } else if (data.length === 2) {
    return data[0] + data[1];
  } else if (data.length === 1) {
    return data[0];
  }

  let first = data[0];
  let second = data[1];
  if (first < second) {
    second = data[0];
    first = data[1];
  }

  for (let i = 2; i < data.length; i++) {
    let num = data[i];
    if (first < num) {
      second = first;
      first = num;
    } else if (second < num && num <= first) {
      second = num;
    }
  }

  return first + second;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([3, 2, 1]));
console.log(sumLargestNumbers([10, 92, 4, 34, 6, 92, 2]));
console.log(sumLargestNumbers([2, 2, 2, 2, 2, 2]));