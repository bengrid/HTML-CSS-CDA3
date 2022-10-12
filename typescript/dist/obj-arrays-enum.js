"use strict";
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["READ_ONLY"] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
const Personne = {
    name: "Benjamin",
    age: 22,
    passions: ["Code", "Jeux"],
    role: Role.ADMIN
};
let activitesFavorites;
activitesFavorites = ["Velo"];
console.log(Personne.name + " " + Personne.age + " ans");
Personne.passions.push(activitesFavorites[0]);
for (const activites of Personne.passions) {
    console.log(activites.toUpperCase());
}
if (Personne.role === Role.ADMIN) {
    console.log("est admin");
}
