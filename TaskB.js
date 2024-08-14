"use strict";
// 100 Days Of Coding Chalenge!
/** Question 50:
Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day.
Include at least three different activities.*/
//-------------------------------------------------------------------------------------------------------------
// Function to describe an ideal day using template literals
function describeIdealDay() {
    // Using template literals to create a multiline string
    const idealDay = `
          My ideal day starts with a refreshing morning walk in the park.
          After that, I enjoy a breakfast while grab a cup of tea and catch up on the latest industry news. 
          In the afternoon, I dive into writing code, solving complex problems, and working on exciting projects.
          In the evening, I wrap up my work by committing the day's code. Later, I relax by playing video games or watching tech talks.
          Finally, I'll enjoy a leisurely walk to unwind and reflect on the day's achievements.
      `;
    return idealDay;
}
// Calling the function and logging the result
console.log(describeIdealDay());
