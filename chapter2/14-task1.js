// Make an array of your 5 favorite movies
// Add one more using push()
// Remove one using pop()
// Use map() to make all names uppercase
// Use filter() to keep only movies with name length > 5

// Make an array of your 5 favorite movies
let favMovies = ["shiddat", "777charlie", "ashiqui2", "vikram", "master"];
console.log("Original:", favMovies);

// Add one more using push()
favMovies.push("leo");
console.log("After push:", favMovies);

// Remove one using pop()
favMovies.pop();
console.log("After pop:", favMovies);

// Use map() to make all names uppercase
let upperMovies = favMovies.map(movie => movie.toUpperCase());
console.log("Uppercase:", upperMovies);

// Use filter() to keep only movies with name length > 5
let longMovies = favMovies.filter(movie => movie.length > 5);
console.log("Length > 5:", longMovies);
