"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
;
