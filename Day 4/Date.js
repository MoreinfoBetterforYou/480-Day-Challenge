// The date object is an important object in JavaScript that is used to work with dates and times. It is a built-in object that provides methods for manipulating dates and times. The Date() object is declared using the Date() constructor. 
// The date object can be created in 4 ways:

// 1. Using the Date() constructor without any arguments:
const now = new Date();
console.log("Creating the date without any arguments:")
console.log(now);
console.log();

// 2. Using some arguments in the Date() constructor:
const todaysDate = new Date(2025, 4, 10, 20, 51, 0); // Note: The important thing to note here is that firstly the argument you pass should be according to the ISO 8601 format. Secondly, the month is 0-indexed, meaning January is 0, February is 1, and so on.
console.log("Creating the date by passing arguments in the Date() constructor.");
console.log(todaysDate);
console.log();

// 3. Using a string to create the Date() constructor:
const dateFromString = new Date("2025-05-10T20:51:00.000"); // Note: The string should also be in the ISO 8601 format. The string should be in the format YYYY-MM-DDTHH:mm:ss.sssZ, where T is the separator between the date and time, and Z is the timezone offset. It is important to note that unlike the previous example, when declaring a date using a strng the month is 1-indexed, meaning January is 1, February is 2, and so on.
console.log("Creating a date by using a srting:");
console.log(dateFromString);
console.log();

// 4. Using Miliseconds to create the Date() constructor:
const dateFromMilliseconds = new Date(1746872660000); // Note: The milliseconds should be the number of milliseconds since January 1, 1970, 00:00:00 UTC. This is known as the Unix epoch time. That is the time what your computer thinks when time was invented. The date is calculated by adding the number of milliseconds to the Unix epoch time.
console.log("Creating a date by using milliseconds:");
console.log(dateFromMilliseconds);
console.log();

// The date object has many methods that can be used to manipulate dates and times. Some of the most commonly used methods are:

// 1. getFullYear(): The getFullYear() method returns the year of the specified date according to local time. It returns a four-digit number representing the year.
const date = new Date();
const year = date.getFullYear();
console.log("getFullYear() method:");
console.log(`The year is: ${year}`);
console.log();

// 2. getDate(): The getDate() method returns the day of the month (1-31) for the specified date according to local time.
const dateOfTheMonth = date.getDate();
console.log("getDate() method:");
console.log(`The date of the month is: ${dateOfTheMonth}th`);
console.log();

// 3. getMonth(): The getMonth() method returns the month (0-11) for the specified date according to local time. Note: The month is 0-indexed, meaning January is 0, February is 1, and so on.
const month = date.getMonth();
console.log("getMonth() method:");
console.log(`The month is: ${month}`);
console.log();

// I felt like it would be a good idea to use the getMonth() method to get the Month of the year and then use a switch statement to print the name of the month. This is a good way to practice using the switch statement and also to learn how to use the getMonth() method.

switch(month) {
    case 0:
        console.log(`The Month is January`);
        break;
    case 1:
        console.log(`The month is February`);
        break;
    case 2: 
        console.log(`The month is March.`);
        break;
    case 3:
        console.log(`The month is April`);
        break;
    case 4:
        console.log(`The month is May`);
        break;
    case 5:
        console.log(`The month is June`);
        break;
    case 6:
        console.log(`The month is July`);
        break;
    case 7:
        console.log(`The month is August`);
        break;
    case 8:
        console.log(`The month is September`);
        break;
    case 9:
        console.log(`The month is October`);
        break;
    case 10:
        console.log(`The month is November`);
        break;
    case 11:
        console.log(`The month is December`);
        break;
    default:
        console.log(`Invalid month.`);
        break;
}
console.log();

// 4. getDay(): The getDay() method returns the day of the week (0-6) for the specified date according to local time. Note: The day is 0-indexed, meaning Sunday is 0, Monday is 1, and so on.
const day = date.getDay();
console.log("getDay() method:");
console.log(`The day is: ${day}`);
console.log();

// I felt like it would be a good idea to use the getDay() method to get the day of the week and then use a switch statement to print the name of the day. This is a good way to practice using the switch statement and also to learn how to use the getDay() method.

switch (day) {
    case 0:
        console.log("Today is Sunday");
        break;
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    default:
        console.log("Invalid day");
        break;
}
console.log();

// 5. getHours(): The getHours() method is used to get the Hours from the Date() object.
const Hours = date.getHours();
console.log("getHours() method:");
console.log(`The Hour is: ${Hours}hr.`);
console.log();

// 6. getMiliseconds(): The getMiliSeconds() method is used to get the number of miliseconds from the Date() object.
const Miliseconds = date.getMilliseconds();
console.log("getMiliseconds() method:");
console.log(`The Miliseconds is: ${Miliseconds}ms`);
console.log();

// 7. getMinutes(): The getMinutes() methods is used to get the number of minutes from the Date() object.
const Minutes = date.getSeconds();
console.log("getMinutes() method:");
console.log(`The Minutes is: ${Minutes}min`);
console.log();

// 8. getSeconds(): The getSeconds() method is used to get the number of seconds from the Date() object.
const Seconds = date.getSeconds();
console.log("getSeconds():");
console.log(`The Seconds is: ${Seconds}s`);
console.log();

// 9. getTime(): The getTime() method is used to get the number of miliseconds that have passed since the Unix Epoch. 
const numberOfMilisecondsSinceUnixEpoch = date.getTime();
console.log("getTime() method:");
console.log(`The number of miliseconds passed since the Unix Epoch are: ${numberOfMilisecondsSinceUnixEpoch}ms.`);
console.log();

// 10. getTimezoneOffset(): The getTimezoneOffset() method is used to get the offset between the users computer's local time and the UTC international time. Note: It is important to remember the fact the offset can be both positive and negative based upon the location of the place where you reside. Another important thing to note is that it will give the offset in minutes.
const Offset = date.getTimezoneOffset();
console.log("getTimezoneOffset():");
console.log(`The offset between Pakistan Standard Time (PST) and UTC is: ${Offset}min.`);
console.log();

// 11-18: These are all just the same methods we learn for local time but these ones are specifically for UTC. I will list the names of them they do jus the same thing. 
console.table(["getUTCDate()", "getUTCFullYear()", "getUTCDay()", "getUTCHours()", "getUTCMiliseconds()", "getUTCMinutes()", "getUTCMonth()", "getUTCSeconds()"]);

// 19-33: There are all setters. They are used to set a specific date or time. These are very much self explamatory and aren't that hard all you need is just some common sense. I won't be telling you everything about all of these I'll only provide you examples to demonstrate how they work.
let setters = ['date.setDate(1)', 'date.setFullYear(2025)', 'date.setHours(12)', 'date.setMilliseconds(50)', 'date.setMinutes(59)', "date.setMonth(0)", 'date.setSeconds(59)', 'date.setTime(2000000000)', 'date.setUTCDate(1)', 'date.setUTCFullYear(2025)', 'date.setUTCHours(7)', 'date.setUTCMilliseconds(50)', 'date.setUTCMinutes(59)', 'date.setUTCMonth(0)', 'date.setUTCSeconds(59)'];
console.table(setters);

// 34: toDateString(): The toDateString() method is used to convert the Date object into a human readable string of the date.
let humanReadableDate = date.toDateString();
console.log("toDateString() method:");
console.log(`The date object in human readable form is: ${humanReadableDate}`);
console.log();

// 35. toISOString(): The toISOString() method is used to convert the date object into the standard ISO 8601 format which is associated with UTC(Coordinated Universal Time).
let isoString = date.toISOString();
console.log("toISOString() method:");
console.log(`Date in ISO 8601 format is: ${isoString}`);
console.log();

// 36. toLocaleDateString(locale, options): The toLocaleDateString(locale, options) method returns the date portion of the date object formated according to the local language and regional settings. The toLocaleDateString(locale, options) has two parameters these are locale and options which define the format of the Date() object.
const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit"
};
let localeDateString = date.toLocaleDateString(["en-PK"], options);
console.log("toLocaleDateString(locale, options)");
console.log(`The Date() object formatted with the toLocaleDateString() method is: ${localeDateString}`);
console.log();

// 37. toLocaleString(locale, options): The toLocaleString(locale, options) method return the Date() object formated according to the local language and regional settings. The toLocaleDateString(locale, options) has two parameters these are locale and options which define the format of the Date() object.
const localeString = date.toLocaleString("en-PK", options);
console.log("toLocaleString(locale, options) method:")
console.log(`The Date() object formatted with the toLocaleString(locale, options) method is: ${localeString}`);
console.log();

// 38. toLocaleTimeString(locale, options): The toLocaleTimeString(locale, options) method returns the time portions of the Date() object formatted according to the local language and regional settings. The toLocaleDateString(locale, options) has two parameters these are locale and options which define the format of the Date() object.
const localeTimeString = date.toLocaleTimeString("en-PK", options);
console.log("toLocaleTimeString(locale, options), method:");
console.log(`The Date() object formatted with the toLocaleTimeString(locale, options) method is: ${localeTimeString}`);
console.log();