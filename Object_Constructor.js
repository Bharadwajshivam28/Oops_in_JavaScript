// Creating Object by Object Constructor

function person(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
}

let person1 = new person("Shivam", "Kumar")
let person2 = new person("Govind", "Kumar")

console.log(person1.first_name)
console.log(`The first name of second person is ${person2.first_name} and the last name of second person is ${person2.last_name}`)