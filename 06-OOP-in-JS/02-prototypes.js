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


Car.prototype.repaint = function (newColor) {
  this.color = newColor;
};

car1.repaint("black");
console.log(car1.describe());      // black GMC Hammer (2025)
