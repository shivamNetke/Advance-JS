let todaysDate = new Date();
console.log("Today's Date: ", todaysDate);

console.log("Year: ", todaysDate.getFullYear());
console.log("Month: ", todaysDate.getMonth() + 1); // Month is 0-indexed
console.log("Date: ", todaysDate.getDate());
console.log("Hour: ", todaysDate.getHours());

let birthdayDate = new Date("2025-12-20"); 
console.log("My Birthday: ", birthdayDate);

let timeDiff = birthdayDate.getTime() - todaysDate.getTime();
let daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
console.log("Days until my birthday: ", daysLeft);

// Display the current date in "DD/MM/YYYY" format
let day = todaysDate.getDate();
let month = todaysDate.getMonth() + 1; // Adding 1 to correct 0-based index
let year = todaysDate.getFullYear();
let formattedDate = `${day}/${month}/${year}`;
console.log("Formatted Date: ", formattedDate);
