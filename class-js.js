class Car {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }
  vehicle() {
    console.log(`My car name is ${this.brand} and buying year is ${this.year}`);
  }
}

const myCar = new Car("Prado", 2024);
myCar.vehicle();

//
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  makingSound() {
    return `The ${this.name} makes a ${this.sound}`;
  }
}
const myDomestic = new Animal("Dog", "Ghew Ghew");
const property = myDomestic.makingSound();
console.log(property);
console.warn(property);
console.error(property);
