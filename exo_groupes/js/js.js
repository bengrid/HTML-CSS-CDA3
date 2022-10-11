let participants = [];
let lesGroupes = [];

class Participant{
    constructor(nom,niveau){
        this.nom = nom;
        this.niveau = niveau;
    }
}

function ajout()
{
    /*var leNom = document.getElementById("nomParticipant").value;
    var leNiv = document.getElementById("niveauParticipant").value;
    if(leNom && leNiv != ""){
    var unParticipant = new Participant(leNom,leNiv);
    console.log(unParticipant);
    participants.push(unParticipant);
    }
    else{alert("Il manque une ou plusieurs information(s)")
    }*/
    participants.push(document.getElementById("nomParticipant").value) 
    let divP = document.createElement("div");
    divP.id = "Candidat";
    divP.textContent="Prenom: "+document.getElementById("nomParticipant").value+" Niveau: "+document.getElementById("niveauParticipant").value;
    document.body.appendChild(divP);
}



function groupes(){
    
    let nbGroupes = document.getElementById("nbGroupes").value;
    let nbParticipants = participants.length;
    if(nbParticipants >= nbGroupes){
    let ppg = nbParticipants / nbGroupes
    var array0 = participants.splice(/*Math.random() * (participants.length - 0) +*/ 0,ppg);
    var array1 = participants.splice(/*Math.random() * (participants.length - 0) +*/ 0,ppg);
    var array2 = participants.splice(/*Math.random() * (participants.length - 0) +*/ 0,ppg);
    var array3 = participants.splice(/*Math.random() * (participants.length - 0) +*/ 0,ppg);
    var array4 = participants.splice(/*Math.random() * (participants.length - 0) +*/ 0,ppg);
    switch(nbGroupes){
        case "1":

            lesGroupes.push(array0);
            console.log("nb1");
            break;
        case "2":

            lesGroupes.push(array0);
            lesGroupes.push(array1);
            console.log("nb2");
            break;
        case "3":

            lesGroupes.push(array0);
            lesGroupes.push(array1);
            lesGroupes.push(array2);
            console.log("nb3");
            break;
        case "4":

            lesGroupes.push(array0);
            lesGroupes.push(array1);
            lesGroupes.push(array2);
            lesGroupes.push(array3);
            console.log("nb4");
            break;
        case "5":
            lesGroupes.push(array0);
            lesGroupes.push(array1);
            lesGroupes.push(array2);
            lesGroupes.push(array3);
            lesGroupes.push(array4);
            console.log("nb5");
            break;
    }
    
    for(const unGroupe of lesGroupes){
        let divG = document.createElement("div");
        divG.id = "groupes";
        /*for(const unCandidat of unGroupe){
            divG.textContent = unCandidat.nom;
            console.log("candidat: "+unCandidat.nom)
        }*/
        divG.textContent=unGroupe;
        divG.classList.add("border");
        divG.classList.add("background");
        divG.classList.add("divGroupes");
        document.body.appendChild(divG);
        }
    }else{
        alert("Pas assez de participants")
    }
    };