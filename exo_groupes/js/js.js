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
    for(let i = 0; i<5;i++){
        if(array)
    };
    console.log(ppg);
    console.log(array2);
}