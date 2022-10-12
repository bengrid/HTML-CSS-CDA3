enum Role {ADMIN = 'ADMIN',READ_ONLY = "READ_ONLY",AUTHOR = "AUTHOR"}

const Personne : {
    name : string;
    age : number;
    passions : string[];
    role : Role;
} = {
//const Personne ={
    name: "Benjamin",
    age: 22,
    passions : ["Code","Jeux"],
    role: Role.ADMIN
}
let activitesFavorites: string[];
activitesFavorites = ["Velo"];

console.log(Personne.name+" "+Personne.age+" ans");

Personne.passions.push(activitesFavorites[0]);

for (const activites of Personne.passions){
    console.log(activites.toUpperCase());
}

if(Personne.role === Role.ADMIN){
    console.log("est admin");
}