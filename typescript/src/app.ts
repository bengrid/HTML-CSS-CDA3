const  sports = ["Football", "Rugby"];
const sports2 = ["Tennis"];

sports2.push(...sports);
console.log(sports2);

const personne = {
    firstname : "Jean",
    age : 54
};

const copiePersonne = {...personne};

copiePersonne.firstname = "Toto";
console.log(personne);
console.log(copiePersonne);

const add2= (...numbers: number[])=>{
    return numbers.reduce((currentResult, currentValue)=>{
        return currentResult + currentValue
    },0);
};
        
const additionNombre = add2(5, 10, 2, 3, 9);
console.log(additionNombre);

//rest operator
const [sport1, sport2, ...autreSport] = sports2;
console.log(sports2, sport1, sport2, autreSport);
const { firstname, age } = personne

console.log(firstname, age, personne);