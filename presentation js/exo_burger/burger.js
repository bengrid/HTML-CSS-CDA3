const burgerO = ["pain","chedar","steak","cornichon","ketchup","salade","tomate","oignon"]

let burgerVegie = [...burgerO];
burgerVegie.splice(2,1);
console.log(`burger vegie: ${burgerVegie}`);

let burgerVegan = [...burgerO];
burgerVegan.splice(1,1)
burgerVegan.splice(1,1)
console.log(`burger vegan: ${burgerVegan}`);

let burgerCarnivore = [...burgerO];
burgerCarnivore.splice(1,2,"chedar","steak");
burgerCarnivore.splice(3,1,);
burgerCarnivore.splice(4,1,);
burgerCarnivore.splice(4,1,);
burgerCarnivore.splice(4,1,);
console.log(`burger carnivore: ${burgerCarnivore}`);

let burgerCustom = [...burgerO];
burgerCustom.splice(3,2,"chedar","steak");
burgerCustom.splice(5,3,"salade","oignon","ketchup");
console.log(`burger custom: ${burgerCustom}`);

let commande = [];
let x = prompt("combien d'elements voulez vous?: ");
let nb = parseInt(x);

for(let i=0;i!=nb;i++){
    let element = prompt("Que voulez vous ajouter?: ")
    commande.push(element);
}
if(commande.length>0){
    alert(commande);
    console.log(`burger custom: ${commande}`)
}



/*
1/burger vege(pas de viande)
2/burger vegan(pas de produits animal)
3/burger carnivore(pas de vegetal)
4/burger custom
5/ system de commande
*/
