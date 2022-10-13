abstract class Person {
    name: string;

    constructor(name: string){
        this.name = name;
    }

    display(): void{
        console.log(this.name);
    }

    abstract find(name: string): Person;
}

class Employe extends Person{
    empCode: number;

    constructor(name: string, code: number){
        super(name);
        this.empCode = code;
    }

    find(name:string): Person {
        return new Employe(name, 1);
    }
}

let emp: Person = new Employe("James", 100);
emp.display();

let emp2: Person = emp.find('Steve');
emp2.display();