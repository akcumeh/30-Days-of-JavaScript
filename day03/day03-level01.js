// Day 3 Level 1

// Question 1
// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

var firstName = "Angel", lastName = "Umeh", country = "Nigeria sigh", city = "Lagos", age = 20, isMarried = false, year = new Date().getYear();
console.log(typeof firstName, typeof lastName, typeof country, typeof city, typeof age, typeof isMarried, typeof year);

// Question 2
// Check if type of '10' is equal to 10

console.log(typeof "10" == 10);

// Question 3
// Check if parseInt('9.8') is equal to 10

console.log(parseInt("9.8") === 10);

// Question 4
/* Boolean value is either true or false.
- Write three JavaScript statement which provide truthy value.
- Write three JavaScript statement which provide falsy value. */

console.log(true, "string", 5);
console.log(false, 0n, null);

// Question 5
/* Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

- 4 > 3
- 4 >= 3
- 4 < 3
- 4 <= 3
- 4 == 4
- 4 === 4
- 4 != 4
- 4 !== 4
- 4 != '4'
- 4 == '4'
- 4 === '4'
- Find the length of python and jargon and make a falsy comparison statement. */

console.log(4 > 3, 4 >= 3, 4 < 3, 4 <= 3, 4 == 4, 4 === 4, 4 != 4, 4 !== 4, 4 != '4', 4 == '4', 4 === '4');

// Question 6
/* Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

- 4 > 3 && 10 > 12
- 4 > 3 && 10 < 12
- 4 > 3 || 10 < 12
- 4 > 3 || 10 > 12
- !(4 > 3)
- !(4 < 3)
- !(false)
- !(4 > 3 && 10 < 12)
- !(4 > 3 && 10 > 12)
- !(4 === '4')
- There is no 'on' in both dragon and python */

console.log(4 > 3 && 10 > 12, 4 > 3 && 10 < 12, 4 > 3 || 10 < 12, 4 > 3 || 10 > 12, !(4 > 3), !(4 < 3), !(false), !(4 > 3 && 10 < 12), !(4 > 3 && 10 > 12), !(4 === '4'), "dragon".match(/on/g)[0] == 'python'.match(/on/g)[0]);

// Question 7
/* Use the Date object to do the following activities

- What is the year today?
- What is the month today as a number?
- What is the date today?
- What is the day today as a number?
- What is the hours now?
- What is the minutes now?
- Find out the numbers of seconds elapsed from January 1, 1970 to now. */

const today = new Date();
console.log(today.getFullYear(), today.getMonth(), today.getDate(), today.getDay(), today.getHours(), today.getMinutes(), today.getTime());
