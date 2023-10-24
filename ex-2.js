function countVowels(words) {
  // Start coding here
  words = words.toLowerCase();
  let vowelsCount = 0;
  for (let i = 0; i < words.length; i++) {
    const char = words.charAt(i);
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
      vowelsCount++
    }
  }
  return vowelsCount;
}

countVowels("Hello World"); // Output: 3
countVowels("TechUp"); // Output: 2

console.log(countVowels("Hello World"));
console.log(countVowels("TechUp"));