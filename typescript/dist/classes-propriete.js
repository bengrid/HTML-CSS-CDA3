"use strict";
class Departement {
    constructor(id, n) {
        this.employes = [];
        this.nom = n;
        this.id = id;
    }
    decrire() {
        console.log(`Departement : ${this.nom}`);
    }
    addEmploye(employe) {
        this.employes.push(employe);
    }
    printInfoEmploye() {
        console.log(this.employes.length);
        console.log(this.employes);
    }
}
class DepartementIT extends Departement {
    constructor(id, admin) {
        super(id, "IT");
        this.admin = [];
        this.admin = admin;
    }
}
class DepartementCompta extends Departement {
    constructor(id, fichierCompta) {
        super(id, "Comptabilite");
        this.fichierCompta = fichierCompta;
        this.dernierFichier = fichierCompta[-1];
    }
    get fichierRecent() {
        if (this.dernierFichier) {
            return this.dernierFichier;
        }
        throw new Error(" Fichier inexistant ");
    }
    set fichierRecent(value) {
        if (!value) {
            throw new Error(" Entrez une valeur valide ");
        }
        this.dernierFichier = value;
        this.ajouterFichier(value);
    }
    addEmploye(employe) {
        if (employe == "David") {
            return;
        }
        this.employes.push(employe);
    }
    ajouterFichier(text) {
        this.fichierCompta.push(text);
    }
    imprimerFichiers() {
        console.log(this.fichierCompta);
    }
}
const comptabilite = new Departement("COMPTA", "Comptabilite");
comptabilite.decrire();
comptabilite.addEmploye("Jean");
comptabilite.addEmploye("Paul");
comptabilite.decrire();
comptabilite.printInfoEmploye();
const it = new DepartementIT("iT1", ["Alex"]);
const compta2 = new DepartementCompta("COMPTA2", []);
const fichierCompta = "chiffre d'Affaire : 2 000 000 $";
compta2.ajouterFichier(fichierCompta);
compta2.imprimerFichiers();
compta2.addEmploye("David");
compta2.addEmploye("Max");
console.log('compta2');
compta2.decrire();
compta2.printInfoEmploye();
console.log(compta2.fichierRecent);
it.addEmploye('Florian');
it.addEmploye('Jeremy');
it.decrire();
it.printInfoEmploye();
console.log(it);
