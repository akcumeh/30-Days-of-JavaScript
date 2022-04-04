// Day 4 Level 2

// Question 1
/* Write a code which can give grades to students according to their scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F */

var score = parseFloat(prompt("What's your score?"));

if (score >= 80) {
    document.write("You scored A.");
} else if (70 <= score < 80) {
    document.write("You scored B.");
} else if (60 <= score < 70) {
    document.write("You scored C.");
} else if (50 <= score < 60) {
    document.write("You scored D.");
} else if (score < 50) {
    document.write("You scored F.");
};

// Question 2
/* Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer */

var month = prompt("Enter the month in full (January, not Jan or J or 01):");
// Method I - if-else
if ((month.toLowerCase() === "march") || (month.toLowerCase() === "april") || (month.toLowerCase() === "may")) {
    document.writeln("The season is spring.");
} else if ((month.toLowerCase() === "june") || (month.toLowerCase() === "july") || (month.toLowerCase() === "august")) {
    document.writeln("The season is summer.");
} else if ((month.toLowerCase() === "september") || (month.toLowerCase() === "october") || (month.toLowerCase() === "november")) {
    document.writeln("The season is autumn.");
} else if ((month.toLowerCase() === "december") || (month.toLowerCase() === "january") || (month.toLowerCase() === "february")) {
    document.writeln("The season is winter.");
} else {
    document.writeln("Maybe you didn't spell something right.");
};
// Method II - switch-case
switch (month.toLowerCase()) {
    case "january":
        document.writeln("The season is winter.");
        break;

    case "february":
        document.writeln("The season is winter.");
        break;

    case "march":
        document.writeln("The season is spring.");
        break;
    
    case "april":
        document.writeln("The season is spring.");
        break;

    case "may":
        document.writeln("The season is spring.");
        break;

    case "june":
        document.writeln("The season is summer.");
        break;

    case "july":
        document.writeln("The season is summer.");
        break;

    case "august":
        document.writeln("The season is summer.");
        break;

    case "september":
        document.writeln("The season is autumn.");
        break;

    case "october":
        document.writeln("The season is autumn.");
        break;

    case "november":
        document.writeln("The season is autumn.");
        break;

    case "december":
        document.writeln("The season is winter.");
        break;

    default:
        document.writeln("Maybe you didn't spell something right.")
        break;
};

// Question 3
// Check if a day is weekend day or a working day. Your script will take day as an input.

var thisDay = prompt("What day is it? Please enter the day in full (Friday, not Fri or F)").toLowerCase();
// Method I - if-else
if ((thisDay === "monday") || (thisDay === "tuesday") || (thisDay === "wednesday") || (thisDay === "thursday") || (thisDay === "friday")) {
    document.writeln("It's a working day, get your ass out of bed.");
} else if ((thisDay === "saturday") || (thisDay === "sunday")) {
    document.writeln("It's the weekend!");
} else {
    document.writeln("Maybe you didn't spell something right.");
};
// Method II - switch-case
switch (thisDay) {
    case "monday":
        document.writeln("It's a working day, get your ass out of bed.");
        break;
    case "tuesday":
        document.writeln("It's a working day, get your ass out of bed.");
        break;
    case "wednesday":
        document.writeln("It's a working day, get your ass out of bed.");
        break;
    case "thursday":
        document.writeln("It's a working day, get your ass out of bed.");
        break;
    case "friday":
        document.writeln("It's a working day, get your ass out of bed.");
        break;
    case "saturday":
        document.writeln("It's the weekend!");
        break;
    case "sunday":
        document.writeln("It's the weekend!");
        break;

    default:
        document.writeln("Maybe you didn't spell something right.");
        break;
}
