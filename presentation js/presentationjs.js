class Person{
    constructor(prenom,nom,age,lunettes){
        this.prenom = prenom;
        this.nom = nom;
        this.age = age;
        this.lunettes = lunettes;
    }
}

let benjamin = new Person("Benjamin","Rorowski",22,true);

/*objet
let benjamin ={
    prenom: "Benjamin",
    nom: "Rorowski",
    age: 22
};
*/

let prenom = benjamin.prenom;
let nom = benjamin["nom"];
let age = benjamin.age;
let lunettes = benjamin.lunettes;
let alunettes = "";

if(lunettes){
    alunettes=" et je porte des lunettes"
}else{

}


const presentationM = `Bonjour je m'applle ${prenom} ${nom}, j'ai ${age} ans${alunettes},`;
console.log(presentationM);

age++;

const ageP = `l'année prochaine, j'aurai ${age} ans.`
console.log(ageP);

prenom = "fred";
nom = "dupont";

const presentationV ="Mon voisin s'appelle " + prenom + " " + nom +"."
console.log(presentationV);

let leGroupe = ["Benjamin","Fred","Tibo"];
leGroupe.unshift("David");
leGroupe.push("Jaque");
let pers1 =  leGroupe[0];
let pers2 =  leGroupe[1];
let pers3 =  leGroupe[2];
let pers4 =  leGroupe[3];
let pers5 =  leGroupe[4];

console.log(" ")
console.log(`le groupe est composé de ${leGroupe.length} personne(s).`)
for(i=0; i<leGroupe.length; i++){
    console.log(`${leGroupe[i]} fait partie du groupe et il est numero ${i+1} dans la liste.`)
}
console.log(" ");

let feu =Math.floor(Math.random()*3);

if(feu===0){
    console.log("Le feu est vert vous pouvez avencer.");
}else if(feu===1){
    console.log("Le feu est orange ralentissez.");
}else if(feu===2){
    console.log("Le feu est rouge arretez-vous.");
}else{
    console.log("Le feu tricolore est actuellement en panne.");
}

console.log(" ");

class client{
    constructor(sexe, age){
        this.sexe = sexe;
        this.age = age;
    }
}

let unClient = new client("femme", 26);

if(unClient.age < 18){
    console.log(`reduction de ${unClient.age}%`)
}else if(unClient.age <= 25 && unClient.sexe == "femme"){
    console.log(`reduction de 20% car femme <= 25ans`);
}else if(unClient.sexe == "homme" && unClient.age > 50){
    console.log("reduction de 25% car homme > 50 ans");
}else if(unClient.sexe == "femme" && unClient.age >= 26){
    console.log(`reduction de 25% car femme >= 26ans`)
}
console.log(" ");
/*
for (i in leGroupe) {
    console.log(`Bonjour à ${leGroupe[i]}.`);
}
*/

for (let personne of leGroupe) {
    console.log(`Bonjour à ${personne}.`);
}
console.log(" ");

let division = (a, b) => a/b;
console.log("division "+division(9,2));

console.log(" ");
let multiplication = (a, b) => a*b;
console.log("multiplication "+multiplication(4,8));

console.log(" ");

let soustraction = (a, b) => a-b;
console.log("soustraction "+soustraction(8,6));

console.log(" ");

let somme = (a, b) => a+b;
console.log("somme "+somme(12,5));

console.log(" ");
function moyenne(a,b,c,d,e){
    let res =a+b+c+d+e;
    res = res /5;
    return res;
}

console.log("moyenne "+moyenne(12,15,10,1,4));


let val1 = 7;
let action ="+";
let val2 = 4;

console.log(" ");
console.log("calculatrice: ")

switch(action){
    case "+":
        console.log("somme: "+somme(val1,val2));
    break;

    case "-":
        console.log("soustraction: "+soustraction(val1,val2));
    break;

    case "*":
        console.log("multiplication: "+multiplication(val1,val2));
    break;

    case "/":
        console.log("division: "+division(val1,val2));
    break;
}