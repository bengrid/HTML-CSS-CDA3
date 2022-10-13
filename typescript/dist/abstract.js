"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    display() {
        console.log(this.name);
    }
}
class Employe extends Person {
    constructor(name, code) {
        super(name);
        this.empCode = code;
    }
    find(name) {
        return new Employe(name, 1);
    }
}
let emp = new Employe("James", 100);
emp.display();
let emp2 = emp.find('Steve');
emp2.display();
