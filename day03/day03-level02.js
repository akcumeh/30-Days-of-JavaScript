console.clear();

// Day 3 Level 2

// Question 1
/* Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h):
Enter base: 20
Enter height: 10
The area of the triangle is 100 */

var base = parseFloat(prompt("Enter the base of the triangle:"));
var height = parseFloat(prompt("Enter the height of the triangle:"));

let area = 0.5 * base * height;

console.log(area);

// Question 2
/* Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c):
Enter side a: 5
Enter side b: 4
Enter side c: 3
The perimeter of the triangle is 12 */

let a = parseFloat(prompt("Enter the first side of the triangle:")), b = parseFloat(prompt("Enter the second side of the triangle:")), c = parseFloat(prompt("Enter the third side of the triangle:")), perimeter = a + b + c;

console.log(perimeter);

// Question 3
// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let l = parseFloat(prompt("Please enter the rectangle's length:")), w = parseFloat(prompt("Please enter the rectangle's width:")), area02 = l * w;

console.log(area02);

// Question 4
// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

let r = parseFloat(prompt("What's the circle's radius?")), area03 = Math.PI * r * r, circ = 2 * Math.PI * r;

console.log(`This circle\'s area is ${area03} and its circumference is ${circ}.`);

// Question 5
// Calculate the slope, x-intercept and y-intercept of y = 2x -2



// Question 6
// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)



// Question 7
// Compare the slope of above two questions.

// Question 8
// Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

// Question 9
/* Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person:
Enter hours: 40
Enter rate per hour: 28
Your weekly earning is 1120 */

// Question 10
// If the length of your name is greater than 7 say, your name is long else say your name is short.

// Question 11
/* Compare your first name length and your family name length and you should get this output.
>> let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
<< Your first name, Asabeneh is longer than your family name, Yetayeh */

// Question 12
/* Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
>> let myAge = 250
let yourAge = 25
<< I am 225 years older than you. */

// Question 13
/* Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
>> Enter birth year: 1995
<< You are 25. You are old enough to drive

>> Enter birth year: 2005
<< You are 15. You will be allowed to drive after 3 years. */

// Question 14
/* Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years,
>> Enter number of years you live: 100
<< You lived 3153600000 seconds. */

// Question 15
/* Create a human readable time format using the Date time object:
YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm */