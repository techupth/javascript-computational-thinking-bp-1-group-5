

function countVowels(words) {
    let vowels = ["a", "e", "i", "o", "u"]
    let result = 0 ;
    for(let i = 0; i < words.length ; i++){
        if (vowels.includes(words[i])) {
            result++ //ยังไม่เข้าใจว่าทำไมถึงต้องมี result++ 
        }
        
        //Both serve different purposes in the code. 
        //i++ is used for controlling the loop iteration, 
        // while count++ is used for counting the number of vowels found in the input string.
        
    }
    return result
}

countVowels("Hello World"); // Output: 3
countVowels("TechUp"); // Output: 2


console.log(countVowels("Hello World"))
console.log(countVowels("Techup"))