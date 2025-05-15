// Parent Class
class Car {
  constructor(name, brand, color, year, mileage) {
    this.name = name;
    this.brand = brand;
    this.color = color;
    this.year = year;
    this.mileage = mileage;
  }

  describe() {
    return `${this.color} ${this.brand} ${this.name} (${this.year})`;
  }
}

// Child Class: ElectricCar extends Car
class ElectricCar extends Car {
  constructor(name, brand, color, year, mileage, battery) {
    super(name, brand, color, year, mileage); // Call parent constructor
    this.battery = battery; // New property for ElectricCar
  }

  range() {
    return `${this.battery * 5} km per charge`;
  }
}

// Create an instance of ElectricCar
const ev = new ElectricCar("Hammer EV", "GMC", "silver", 2026, "—", 200);

// Output
console.log(ev.describe());     // silver GMC Hammer EV (2026)
console.log(ev.range());        // 1000 km per charge
