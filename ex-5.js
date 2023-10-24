function getLetterFrequency(words) {
  // Start coding here
  words = words.toLowerCase();
  const frequency = {};
  for (const character of words) {
    if (frequency[character]) {
      frequency[character] += 1;
    } else {
      frequency[character] = 1;
    }
  }
  return frequency; 
}

const str = "Techupth";

getLetterFrequency(str);
console.log(getLetterFrequency(str));

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
