const burger = ["pain","chedar","steak","cornichon","ketchup","salade","tomate","oignon"]
burger.splice(2,1);
console.log(`burger vegie: ${burger}`);

burger.splice(1,1)
console.log(`burger vegan: ${burger}`);

burger.splice(1,2,"chedar","steak");
burger.splice(3,1,);
burger.splice(3,1,);
burger.splice(3,1,);
console.log(`burger carnivore: ${burger}`);

burger.splice(3,2,"chedar","steak");
burger.splice(5,3,"salade","oignon","ketchup");
console.log(`burger custom: ${burger}`);

let commande = [];
let x = prompt("combien d'elements voulez vous?: ");
let nb = parseInt(x);

for(let i=0;i!=nb;i++){
    let element = prompt("Que voulez vous ajouter?: ")
    commande.push(element);
}
if(commande.length>0){
    console.log(commande);
}



/*
1/burger vege(pas de viande)
2/burger vegan(pas de produits animal)
3/burger carnivore(pas de vegetal)
4/burger custom
5/ system de commande
*/
