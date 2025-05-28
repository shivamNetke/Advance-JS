function Car(name, brand, color, year, mileage) {
  this.name = name;
  this.brand = brand;
  this.color = color;
  this.year = year;
  this.mileage = mileage;

  // method
  this.describe = function () {
    return `${this.color} ${this.brand} ${this.name} (${this.year})`;
  };
}

const car1 = new Car("Hammer", "GMC", "white", 2025, "10 km/l");
console.log(car1.describe());      // white GMC Hammer (2025)

const car2 = new Car("tavera", "chevrolet", "black", 2017, "15 km/l");
console.log(car2.describe()); 