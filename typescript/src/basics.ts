

function add(n1: any, n2: any, showResult: boolean, phrase: string){
    /*if(typeof n1 !== 'number' || typeof n2 !== 'number'){
        throw new Error("Type incorrect");
    }*/
    const result = n1+n2;
    if(showResult){
        console.log(phrase+result);
    }else{
        return n1+n2;
    }
}

const nombre1: number = 5;
const nombre2: number = 10.8;
const printResult: boolean = true;
const resultPhrase: string = "Le resultat est : "

const result = add(nombre1, nombre2, printResult, resultPhrase);