function person(fname, lname) {
    let firstname = fname;
    let lastname = lname;
    
    let getDetails_noaccess = function () {
        return (`First name is: ${firstname}, Last name is: ${lastname}`);
    }
    
    this.getDetails_access = function () {
        return (`First name is: ${firstname}, Last name is: ${lastname}`);
    }
}

let person1 = new person("Shivam", "Kumar")
console.log(person1.firstname) //Undefined
console.log(person1.getDetails_noaccess); //Undefined
console.log(person1.getDetails_access()); 