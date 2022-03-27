/* Day 3 Level 3
Create a human readable time format using the Date time object. The hour and the minute should be two digits(7 hours should be 07 and 5 minutes should be 05)
ie YYYY-MM-DD HH:mm eg. 2012-01-02 07:05
*/

console.clear();

const time = new Date();

let timeD = time.getDate(), timeM = time.getMonth(), timeY = time.getFullYear(), timeh = time.getHours(), timem = time.getMinutes();

let date = timeD.toString(), month = timeM.toString(), year = timeY.toString(), hour = timeh.toString(), min = timem.toString();

let timeArr = [date, month, year, hour, min];

for (let i = 0; i < timeArr.length; i++) {
    timeArr[i].length < 2
        ? timeArr[i] = "0" + timeArr[i]
        : timeArr[i] = timeArr[i]
}

let theTime = `${timeArr[2]}-${timeArr[1]}-${timeArr[0]} ${timeArr[3]}:${timeArr[4]}`;

console.log(theTime);