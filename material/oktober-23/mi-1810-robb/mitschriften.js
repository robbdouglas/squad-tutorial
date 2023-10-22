// ## Task 1

// - Write a function `allPositive` that takes an array of numbers as an argument and uses the `every()` method to check if all numbers are positive.

// ```js
// function allPositive(numbers) {
//   // Your code here
// }

// // Test cases
// console.log(allPositive([1, 2, 3, 4])); // Should return true
// console.log(allPositive([-1, 2, 3, 4])); // Should return false
// console.log(allPositive([0, 2, 3, 4])); // Should return false
// ```

// SOLUTION TASK 1

function allPositive(numbers) {
    return numbers.every((number) => number > 0);
  }
  
  // Test cases
  
  console.log(allPositive([1, 2, 3, 4])); // Should return true
  console.log(allPositive([-1, 2, 3, 4])); // Should return false