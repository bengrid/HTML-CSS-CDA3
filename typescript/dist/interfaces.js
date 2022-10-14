"use strict";
class Person2 {
    constructor(fn, ap, ln) {
        this.firstname = fn;
        this.agePerso = ap;
        if (ln) {
            this.lastname = ln;
        }
    }
    greetings(phrase) {
        console.log(phrase + this.firstname);
    }
    printAge() {
        console.log("J'ai " + this.agePerso + " ans ");
    }
}
const p2 = new Person2("Benjamin", 22, "Rorowski");
p2.greetings("Salut je m'appelle ");
p2.printAge();
console.log(p2);
const p3 = new Person2("José", 56);
