//Creating Object by Object Literal

let person = {
    first_name: "Shivam",
    last_name: "Kumar",

    getFunction: function() {
        return(`The name of the person is ${person.first_name} ${person.last_name}`)
    },

    phone_number: {
        mobile: "12345",
        landline: "6789"
    }
}

console.log(person.getFunction());
console.log(person.phone_number.landline)