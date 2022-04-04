// Question 1
// Write a program which tells the number of days in a month.

var dayInMonth = prompt("I'd like to know how many days are in ...").toLowerCase();

let DayInMonth = dayInMonth.charAt(0).toUpperCase() + dayInMonth.slice(1);

// Method I - if-else
if (dayInMonth === ("january" || "march" || "may" || "july" || "august" || "october" || "december")) {
    alert(`Don't you know there are 31 days in ${DayInMonth}?`);
} else if (dayInMonth === ("april" || "june" || "september" || "november")) {
    alert(`Don't you know there are 30 days in ${DayInMonth}?`);
} else if (dayInMonth === "february") {
    alert(`Don't you know there are 28 days in ${DayInMonth}? (Most of the time...)`);
} else {
    alert("Please refresh this page to start over, I don't know that month!");
}
// Method II - switch-case
// be like say I will stop doing this switch-case. Too annoying and too long. mafejopami.
switch (dayInMonth) {
    case "january":
        document.writeln(`Don't you know there are 31 days in ${DayInMonth}?`);
        break;

    case "february":
        document.writeln(`Don't you know there are 28 days in ${DayInMonth}? (Most of the time...)`);
        break;
    
    case "march":
        document.writeln(`Don't you know there are 31 days in ${DayInMonth}?`);
        break;

    case "april":
        document.writeln(`Don't you know there are 30 days in ${DayInMonth}?`);
        break;

    case "may":
        document.writeln(`Don't you know there are 31 days in ${DayInMonth}?`);
        break;

    case "june":
        document.writeln(`Don't you know there are 30 days in ${DayInMonth}?`);
        break;

    case "july":
        document.writeln(`Don't you know there are 31 days in ${DayInMonth}?`);
        break;

    case "august":
        document.writeln(`Don't you know there are 31 days in ${DayInMonth}?`);
        break;

    case "september":
        document.writeln(`Don't you know there are 30 days in ${DayInMonth}?`);
        break;

    case "october":
        document.writeln(`Don't you know there are 31 days in ${DayInMonth}?`);
        break;

    case "november":
        document.writeln(`Don't you know there are 30 days in ${DayInMonth}?`);
        break;

    case "december":
        document.writeln(`Don't you know there are 31 days in ${DayInMonth}?`);
        break;

    default:
        break;
}

// Question 2
// Write a program which tells the number of days in a month, now consider leap year.

// should be same as question 1 but with a twist...

if (dayInMonth === "february") {
    year = parseInt(prompt("What year are you asking of?", "2022"));

    function isLeapYear(year) {
        if (year % 4 === 0) {
            if (year % 100 !== 0) {
                return true;
            } else if ((year % 100 === 0) && (year % 400 === 0)) {
                return true;
            } else if ((year % 100 === 0) && (year % 400 !== 0)) {
                return false;
            }
        } else {
            return false;
        }
    };

    if (isLeapYear(year)) {
        if (year > 2022) {
            document.writeln(`In ${year}, ${DayInMonth} is 29 days long.`);
        } else {
            document.writeln(`In ${year}, ${DayInMonth} was 29 days long.`);
        }
    } else {
        if (year > 2022) {
            document.writeln(`In ${year}, ${DayInMonth} is 28 days long.`);
        } else {
            document.writeln(`In ${year}, ${DayInMonth} was 28 days long.`);
        }
    }
}

// It workeddddddd. YASSSSSSS. I used a function. Shouldn't have at this stage. But we move. I did it all myself sha. 😊