// Day 4 Level 1

console.clear();

// Question 1
// Get user input using prompt (“Enter your age:”). If user is 18 or older , give feedback: 'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
// See ../day03/day03-level02.js , Question 13 for the ternary operator version of this question.

var age = parseFloat(prompt("Enter your age:"));

if (age >= 18) {
    document.writeln('You are old enough to drive.');
} else {
    document.writeln(`Wait ${18 - age} years.`);
};

// Question 2
// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
// See ../day03/day03-level02.js , Question 12 for the ternary operator version of this question.

var myAge = parseFloat(prompt("Enter your age, Person 1:")), yourAge = parseFloat(prompt("Enter your age, Person 2:"));

if (myAge > yourAge) {
    document.writeln("Person 1 is older.");
} else if (yourAge > myAge) {
    document.writeln("Person 2 is older.");
} else {
    alert("Huh...");
};

// Question 3
/* If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways

using if else
ternary operator. */

var a = parseFloat(prompt("Please enter a number:")), b = parseFloat(prompt("Please enter another number:"));
// Method I
if (a > b) {
    document.writeln('a is greater than b.')
} else if (b > a) {
    document.writeln('a is less than b.')
};
// Method II
a > b 
    ? document.writeln('a is greater than b.')
    : document.writeln('a is less than b.')

// Question 4
// Even numbers are divisible by 2 and the remainder is zero. How do you check if a number is even or not using JavaScript?

var someNum = parseInt(prompt("Enter a number, let me see if it's even:"));
if ((someNum % 2) == 1) {
    alert("It's odd!");
} else {
    alert("It's even!");
};