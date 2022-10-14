import { strict } from "assert";
import { CLIENT_RENEG_LIMIT } from "tls";

enum type {
    AUTO = "voiture",
    CAMION = "camion",
    MOTO = "moto"   
}
abstract class Vehicule {

   private nbRoue: number;
   private poidVehicule: number;
   private volumeTransportable: number;
   private marque: string;
   private type: type;
   private bruit: string;

    constructor(nbRoue: number, poidVehicule: number, volumeTransportable: number, marque: string, type: type, bruit: string){
        this.nbRoue = nbRoue;
        this.poidVehicule = poidVehicule;
        this.volumeTransportable = volumeTransportable;
        this.marque = marque;
        this.type = type;
        this.bruit = bruit;
    }

    abstract afficherVolumeTransportable(): void;

    abstract bruitMoteur(): void;
        
    
}

class Voiture extends Vehicule {

    private volume: number;
    constructor(marque: string, volume: number){
        super(4, 1000, volume, marque, type.AUTO, "vroum");
        this.volume = volume
    }

    afficherVolumeTransportable(): void{
        console.log(`Le volume transportable est de: ${this.volume}`);
    };

    bruitMoteur(): void{
        console.log("Le bruit du moteur est: Vroum");
    };
}

let V: Vehicule = new Voiture("peugeot",200);
console.log(' ');
console.log(V);
console.log(' ');
C.afficherVolumeTransportable();
console.log(' ');
C.bruitMoteur();
