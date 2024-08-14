"use strict";
// 100 Days Of Coding Chalenge!
/** Question 49:
Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies.
It should log each hobby with a statement saying you enjoy that hobby.*/
//---------------------------------------------------------------------------------------------------------
// Function that takes multiple hobbies as rest parameters
function listHobbies(...hobbies) {
    // Loop through each hobby in the hobbies array
    hobbies.forEach((hobby) => {
        // Log a message saying you enjoy the hobby
        console.log(`I enjoy ${hobby}.`);
    });
}
// Example usage of the function
listHobbies("coding", "reading", "hiking", "driving");
