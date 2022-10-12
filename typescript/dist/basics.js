"use strict";
function add(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
const nombre1 = 5;
const nombre2 = 10.8;
const printResult = true;
const resultPhrase = "Le resultat est : ";
const result = add(nombre1, nombre2, printResult, resultPhrase);
