function countVowels(words) {
  // Start coding here
  let totalVowels = 0;
  for (let i = 0; i < words.length; i++) {
    if (['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(words[i])) {
      totalVowels = totalVowels + 1;
    }
  }
  return totalVowels;
}

countVowels("Hello World"); // Output: 3
countVowels("TechUp"); // Output: 2
