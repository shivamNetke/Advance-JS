let car = {
    name : "hammer",
    brand : "GMC",
    color : "black",
    year : 2025,
    fueltype : "EV"
}

console.log("my fac car is : ",car.name);
console.log("its brand name is : ", car["brand"]);
console.log("its color is : ", car.color);
console.log("____color updated___");

car.color = "white";
car.mileage = "10km/ltr";

console.log("my fac car is : ",car.name);
console.log("its brand name is : ", car["brand"]);
console.log("its color is : ", car.color);
console.log("its updated color is : ", car.color);
console.log("new added ");
console.log("its mileage is : ", car.mileage);