class Car {
    constructor(make, model, gear) {
        this.make = make;
        this.model = model;
        this.gear = gear;
        //this.milegae = 0; //making milegae property public by adding getter
    }
    
    drive(distance) {
        this.mileage += distance;
    }
    
    getMileage() {
        return this.mileage;
    }
}

const myCar = new Car("Toyoto", "Camry", "2022")
console.log(myCar.make)
console.log(myCar.gear)

myCar.drive(500)
console.log(myCar.getMileage()); //No output because the property is pirvate. To make it public will add a getter method for mileage property.