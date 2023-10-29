function getLetterFrequency(words) {
  const frequency = {};

  // Loop through each character in the input string
  for (let i = 0; i < words.length; i++) {
    const letter = words[i].toLowerCase(); // Convert to lowercase for case-insensitive comparison

    // Check if the character is a letter
    if (/[a-z]/.test(letter)) {
      // If the letter is already in the frequency object, increment its count
      if (frequency[letter]) {
        frequency[letter]++;
      } else {
        // If the letter is not in the frequency object, initialize its count to 1
        frequency[letter] = 1;
      }
    }
  }

  // Return the letter frequency object
  return frequency;
}

const str = "Techupth";
const letterFrequency = getLetterFrequency(str);

console.log(letterFrequency);


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
