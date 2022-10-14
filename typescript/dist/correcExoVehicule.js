"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var type;
(function (type) {
    type["AUTO"] = "voiture";
    type["CAMION"] = "camion";
    type["MOTO"] = "moto";
})(type || (type = {}));
class Vehicule {
    constructor(nbRoue, poidVehicule, volumeTransportable, marque, type, bruit) {
        this.nbRoue = nbRoue;
        this.poidVehicule = poidVehicule;
        this.volumeTransportable = volumeTransportable;
        this.marque = marque;
        this.type = type;
        this.bruit = bruit;
    }
}
class Voiture extends Vehicule {
    constructor(marque, volume) {
        super(4, 1000, volume, marque, type.AUTO, "vroum");
        this.volume = volume;
    }
    afficherVolumeTransportable() {
        console.log(`Le volume transportable est de: ${this.volume}`);
    }
    ;
    bruitMoteur() {
        console.log("Le bruit du moteur est: Vroum");
    }
    ;
}
let V = new Voiture("peugeot", 200);
console.log(' ');
console.log(V);
console.log(' ');
C.afficherVolumeTransportable();
console.log(' ');
C.bruitMoteur();
