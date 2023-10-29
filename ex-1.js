let numbers = [10, 20, 30];
let anotherNumbers = [2, 4, 6];

function addNumber(numbers, amount) {

    let newAddNumber =[]
    for (let i = 0 ; i <= addNumber.length ; i ++){
        newAddNumber.push(numbers[i]+amount)
 }
    return newAddNumber

  // Start coding here
  function addNumber(numbers, amount) {
    let result = []
    for (let i = 0; i < numbers.length; i++) {
      result.push(numbers[i] + amount)
    }
    return result
  }

}

addNumber(numbers, 10); // Output: [20, 30, 40]
addNumber(anotherNumbers, 2); // Output: [4, 6, 8]

console.log(addNumber(numbers,10))
console.log(addNumber(anotherNumbers,2))