let participants = [];
let lesGroupes = [];

function ajout(){
    participants.push(document.getElementById("nomParticipant").value);
    console.log(participants);
    console.log(participants.length);
}

function groupes(){
    let nbGroupes = document.getElementById("nbGroupes").value;
    let nbParticipants = participants.length;
    let ppg = nbParticipants / nbGroupes;
    var array0 = participants.splice(0,ppg);
    var array1 = participants.splice(0,ppg);
    var array2 = participants.splice(0,ppg);
    var array3 = participants.splice(0,ppg);
    var array4 = participants.splice(0,ppg);
    console.log("nbG"+nbGroupes);
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
        console.log(unGroupe);
        }
    
    console.log(ppg);
};