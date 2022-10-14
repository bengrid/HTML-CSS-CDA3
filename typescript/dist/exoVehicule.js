"use strict";
var type;
(function (type) {
    type["AUTO"] = "voiture";
    type["CAMION"] = "camion";
    type["MOTO"] = "moto";
})(type || (type = {}));
class Vehicule {
    constructor(nbRoue, poidVehicule, volumeTransportable, marque) {
        this.nbRoue = nbRoue;
        this.poidVehicule = poidVehicule;
        this.volumeTransportable = volumeTransportable;
        this.marque = marque;
    }
} 
class Voiture extends Vehicule {
    constructor(nbRoue, poidVehicule, volumeTranspotable, marque) {
        super(nbRoue, poidVehicule, volumeTranspotable, marque);
    }
    afficherVolumeTransportable() {
        console.log(`Le volume transportable est de: ${this.volumeTransportable}`);
        return this.volumeTransportable;
    }
    ;
    bruitMoteur() {
        console.log("Le bruit du moteur est: " + type.AUTO);
        return (`Le bruit du moteur est: ${type.AUTO}`);
    }
    ;
}
class Camion extends Vehicule {
    constructor(nbRoue, poidVehicule, volumeTranspotable, marque) {
        super(nbRoue, poidVehicule, volumeTranspotable, marque);
    }
    afficherVolumeTransportable() {
        console.log(`Le volume transportable est de: ${this.volumeTransportable}`);
        return this.volumeTransportable;
    }
    ;
    bruitMoteur() {
        console.log("Le bruit du moteur est: " + type.CAMION);
        return (`Le bruit du moteur est: ${type.CAMION}`);
    }
    ;
}
class Moto extends Vehicule {
    constructor(nbRoue, poidVehicule, volumeTranspotable, marque) {
        super(nbRoue, poidVehicule, volumeTranspotable, marque);
    }
    afficherVolumeTransportable() {
        console.log(`Le volume transportable est de: ${this.volumeTransportable}`);
        return this.volumeTransportable;
    }
    ;
    bruitMoteur() {
        console.log("Le bruit du moteur est: " + type.MOTO);
        return (`Le bruit du moteur est: ${type.MOTO}`);
    }
    ;
}
let C = new Camion(8, 5500, 10000, "Renault");
let M = new Moto(2, 350, 60, "Suzuki");
let V = new Voiture(4, 1000, 300, "Peugeot");
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
