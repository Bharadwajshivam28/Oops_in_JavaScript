class Shape { // class
    constructor() { // constructor method for shape class 
        this.name = "Shape" // assigning shape value to name property
    }
    
    calculateArea() { // new method for shape class
        return 0;
    }
}

class Circle extends Shape { //inherting 
    constructor(radius) { //constructor method for circle class 
        super() //super func called within constructor of parent class shape
        this.name = "Circle" // assigning circle value to name property
        this.radius = radius; //assigning radius value to radius property
    }
    
    calculateArea() { //new method named
        return Math.PI * this.radius * this.radius
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super();
        this.name = "Square";
        this.sideLength = sideLength;
    }
    
    calculateArea() {
        return this.sideLength * this.sideLength;
    }
}

const circle = new Circle(5)
const square = new Square(5)

console.log(circle.calculateArea());
console.log(square.calculateArea());
