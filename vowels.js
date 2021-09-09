const vowels = 'aeiou';//['a', 'e', 'i', 'o', 'u'];
const regexForVowels = /[a,e,i,o,u]/gi;
const numberOfVowelsByRegEx = function (data) {
  // Put your solution here
  let result = data.match(regexForVowels);
  return result.length;
};

const numberOfVowelsByStrSearch = function (data) {
  // Put your solution here
  let num = 0;
  for (const ch of data) {
    if (vowels.search(ch.toLowerCase()) >= 0) {
      num++;
    }
  }
  return num;
};

const numberOfVowels = function (data) {
  // Put your solution here
  let num = 0;
  for (const ch of data) {
    for (const vowel of vowels) {
      if (ch.toLowerCase() === vowel) {
        num++;
      }
    }
  }
  return num;
};

console.log(numberOfVowels("An orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

/****
  [Running with String match regex] node "c:\dev\lhl\repos\katas\vowels.js"
  4
  5
  5
  [Done] exited with code=0 in 0.175 seconds

  [Running with String search] node "c:\dev\lhl\repos\katas\vowels.js"
  4
  5
  5
  [Done] exited with code=0 in 0.168 seconds

  Fastest [Running just with for iteration] node "c:\dev\lhl\repos\katas\vowels.js"
  4
  5
  5
  [Done] exited with code=0 in 0.151 seconds

 */