interface PersonneInfo {
    firstname: string,
    lastname?: string,
}

interface PersonneInfo {
    agePerso: number,
    //greetings(phrase: string): void
}


class Personne implements PersonnePrintAge{
    printAge(): void {
        throw new Error("Method not implemented");
    }
    firstname: string;
    lastname?: string|undefined;
    agePerso: number;

    constructor
}
export interface PersonnePrintAge extends PersonneInfo{
    printAge(): void,
}