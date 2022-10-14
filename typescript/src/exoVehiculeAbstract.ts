enum type {
    AUTO = "voiture",
    CAMION = "camion",
    MOTO = "moto"   
}
abstract class Vehicule {

    nbRoue: number;
    poidVehicule: number;
    volumeTransportable: number;
    marque: string;

    constructor(nbRoue: number, poidVehicule: number, volumeTransportable: number, marque: string){
        this.nbRoue = nbRoue;
        this.poidVehicule = poidVehicule;
        this.volumeTransportable = volumeTransportable;
        this.marque = marque;
    }

    abstract afficherVolumeTransportable(): number;

    abstract bruitMoteur(): string;
        
    
}

class Voiture extends Vehicule { 

    constructor(nbRoue: number,poidVehicule: number, volumeTranspotable: number,marque: string){
        super(nbRoue, poidVehicule, volumeTranspotable, marque);
    }

    afficherVolumeTransportable(): number{
        console.log(`Le volume transportable est de: ${this.volumeTransportable}`);
        return this.volumeTransportable;
    };

    bruitMoteur(): string {
        console.log("Le bruit du moteur est: "+type.AUTO);
        return (`Le bruit du moteur est: ${type.AUTO}`);
    };
}


class Camion extends Vehicule {

    constructor(nbRoue: number,poidVehicule: number, volumeTranspotable: number,marque: string){
        super(nbRoue, poidVehicule, volumeTranspotable, marque);
    }

    afficherVolumeTransportable(): number{
        console.log(`Le volume transportable est de: ${this.volumeTransportable}`);
        return this.volumeTransportable;
    };

    bruitMoteur(): string {
        console.log("Le bruit du moteur est: "+type.CAMION);
        return (`Le bruit du moteur est: ${type.CAMION}`);
    };

}

class Moto extends Vehicule {

    constructor(nbRoue: number,poidVehicule: number, volumeTranspotable: number,marque: string){
        super(nbRoue, poidVehicule, volumeTranspotable, marque);
    }

    afficherVolumeTransportable(): number{
        console.log(`Le volume transportable est de: ${this.volumeTransportable}`);
        return this.volumeTransportable;
    };

    bruitMoteur(): string {
        console.log("Le bruit du moteur est: "+type.MOTO);
        return (`Le bruit du moteur est: ${type.MOTO}`);
    };


}

let C: Vehicule = new Camion(8, 5500, 10000, "Renault");
let M: Vehicule = new Moto(2, 350, 60, "Suzuki");
let V: Vehicule = new Voiture(4, 1000, 300, "Peugeot");
console.log(' ');
console.log(C);
console.log(M);
console.log(V);
console.log(' ');
M.afficherVolumeTransportable();
V.afficherVolumeTransportable();
C.afficherVolumeTransportable();
console.log(' ');
M.bruitMoteur();
V.bruitMoteur();
C.bruitMoteur();
