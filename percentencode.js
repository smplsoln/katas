const urlEncodeByStrReplace = function (text) {
  // Put your solution here
  // not changing the argument as that is not
  // what this function is inteended for
  let input = text.trim();
  return input.replace(/\s/g, "%20");
};

const urlEncode = function (text) {
  let input = text.trim();
  let percentEncoded = '';
  for (const ch of input) {
    percentEncoded += (ch === ' ') ? "%20" : ch;
  }
  return percentEncoded;
}
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));