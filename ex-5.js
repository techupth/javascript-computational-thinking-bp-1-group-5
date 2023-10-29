function getLetterFrequency(words) {
  // Start coding here
  const frequency = {};
  for (i = 0; i < words.length; i++) {
    const letter = words[i].toLowerCase();
    if (frequency[letter]) {
      frequency[letter]++;
    } else {
      frequency[letter] = 1;
    }
  }
  return frequency;
}

const str = "Techupth";

getLetterFrequency(str);

/* Output:
{
  t: 2,
  e: 1,
  c: 1,
  h: 2,
  u: 1,
  p: 1
}
*/
