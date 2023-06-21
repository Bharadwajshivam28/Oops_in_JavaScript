// Class Using es6

class Vehicle {
    constructor (name, maker, engine) {
        this.name = name;
        this.maker = maker;
        this.engine = engine;
    }
    getDetails() {
        return(`The name of the bike is ${this.name}.`)
    }
}

let bike1 = new Vehicle("Hayabusa", "Suzuki", "1340cc")
let bike2 = new Vehicle("Ninja", "Kawasaki", "998cc")

console.log(bike1.name);
console.log(bike2.name);
console.log(bike1.getDetails());
console.log(bike2.getDetails());