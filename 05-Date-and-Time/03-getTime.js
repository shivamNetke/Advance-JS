let currentDate = new Date();
let oneWeekLater = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000); 
//                                             days * hours * min * second * milisecond
console.log("One week later: ", oneWeekLater);
