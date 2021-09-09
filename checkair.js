const checkAir = function (samples, threshold) {
  // Code here!
  let dirtyCount = 0;
  for (const sample of samples) {
    if ('dirty' === sample) {
      dirtyCount++;
    }
  }
  let pollution = dirtyCount / samples.length;
  return (pollution <= threshold) ? 'Clean' : 'Polluted';
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))