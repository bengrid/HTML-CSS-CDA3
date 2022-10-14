import{} from "./components/PersonneMethod"

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
    
};