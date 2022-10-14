//interface ==> type checker

// type Combinable2 = string|number

// type PersonneInfo = {
//     firstname: string,
//     lastname: string,
//     age: number
// }

// type PersonneInfo= {
//     username= string,
// }

interface PersonneInfo {
    firstname: string,
    lastname?: string,
}

interface PersonneInfo {
    agePerso: number,
    //greetings(phrase: string): void
}

interface PersonnePrintAge extends PersonneInfo{
    printAge(): void,
}
// const p1 : PersonneInfo = {
//     firstname: "Benjamin", 
//     lastname: "Rorowski", 
//     agePerso: 22,
//     greetings(phrase: string){
//         console.log(phrase + this.firstname);
//     }
// }

// console.log(p1.firstname);
// console.log(p1.lastname);
// console.log(p1.agePerso);
// p1.greetings("Salut je m'appelle ")


class Person2 implements PersonnePrintAge{
    firstname: string;
    lastname?: string;
    agePerso: number;

    constructor(fn: string, ap: number, ln?: string){
        this.firstname = fn;
        this.agePerso = ap;
        if(ln){
            this.lastname = ln;
        }
    }

    greetings(phrase: string){
        console.log(phrase + this.firstname);
    }

    printAge(): void {
        console.log("J'ai "+this.agePerso+" ans ");
    }
    
}

const p2 = new Person2("Benjamin", 22,  "Rorowski");
p2.greetings("Salut je m'appelle ");
p2.printAge();
console.log(p2);

const p3 = new Person2("José", 56);