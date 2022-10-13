class Departement {
    /*publique nom: string;
    publique employes: string[] = [];*/
    private readonly id: string;
    private nom: string;
    protected employes: string[] = [];
    constructor(id: string,n: string){
        this.nom = n;
        this.id = id;
    }

    decrire(this: Departement){
        console.log(`Departement : ${this.nom}`);
    }

    addEmploye(employe: string){
        this.employes.push(employe);
    }

    printInfoEmploye(){
        console.log(this.employes.length);
        console.log(this.employes);
    }
}

class DepartementIT extends Departement{
    private admin: string[] = [];

    constructor(id: string,admin: string[]){
        super(id, "IT");
        this.admin = admin; 
    }
}

class DepartementCompta extends Departement{

    private dernierFichier : string;

    get fichierRecent(){
        if(this.dernierFichier){
            return this.dernierFichier;
        }
        throw new Error(" Fichier inexistant ");
    }

    set fichierRecent(value: string){
        if(!value){
            throw new Error(" Entrez une valeur valide ")
        }
        this.dernierFichier = value;
        this.ajouterFichier(value);
    }
    
    constructor(id: string, private fichierCompta: string[]){
        super(id, "Comptabilite");
        this.dernierFichier = fichierCompta[-1];
    }
    addEmploye(employe: string): void {
        if(employe == "David"){
        return;
        }
        this.employes.push(employe)
    }

    ajouterFichier(text: string){
        this.fichierCompta.push(text);
    }

    imprimerFichiers(){
        console.log(this.fichierCompta);
    }
}



const comptabilite = new Departement("COMPTA","Comptabilite");
comptabilite.decrire();
//const copieCompta = {nom: "copy", decrire: comptabilite.decrire};
//copieCompta.decrire();
comptabilite.addEmploye("Jean");
comptabilite.addEmploye("Paul");
//comptabilite.employes[2]="Tibo";
//comptabilite.nom="Nouveau Nom";
comptabilite.decrire();
comptabilite.printInfoEmploye();

const it = new DepartementIT("iT1", ["Alex"]);

const compta2 = new DepartementCompta("COMPTA2",[]);
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




