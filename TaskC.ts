// 100 Days Of Coding Chalenge!

/**
Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.*/

//---------------------------------------------------------------------------------------------------------------------------------------

/*Original Function:

First, let’s start with a traditional function that calculates the area of a rectangle:*/

// Traditional function to calculate the area of a rectangle
function calculateArea(width: number, height: number): number {
  return width * height;
}

// Example usage
console.log(calculateArea(5, 10)); // Output: 50

/*Refactored to Arrow Function:

  Now, let’s refactor the original function into an arrow function:*/

// Arrow function to calculate the area of a rectangle
const calculate_Area = (width: number, height: number): number => {
  // function name changed to avoid conflict in the code
  return width * height;
};

// Example usage
console.log(calculateArea(5, 10)); // Output: 50
