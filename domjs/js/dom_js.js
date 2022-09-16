const myId = document.getElementById("my-id");
console.log(myId);

console.log(" ");

const myClass = document.getElementsByClassName("my-class");
console.log(myClass);

console.log(" ");

const ul = document.getElementsByTagName("ul");
console.log(ul);

console.log(myClass[1]);
console.log("");

let google = document.getElementById("google-id");
google.textContent = "lien vers google";
console.log(google.id);
console.log(google.className);
console.log(google.textContent);
/*document.querrySelector(".google-class") */
console.log(google.href);

let p = document.createElement("p");
p.id = "newParagraphe";
p.textContent = "Mon paragraphe en js";
p.classList.add("color-red","text-uppercase");

myClass[0].innerHTML = "<p>premiere div</p>";
myClass[1].innerHTML = "<p>deuxieme div</p>";
myClass[2].innerHTML = "<p>troisieme div</p>";

myClass[0].classList.add("text-uppercase");
myClass[1].classList.add("background");
myClass[2].classList.add("border");

document.body.appendChild(p);

let h1 = document.createElement("h1");
h1.id = "welcome";
h1.textContent = "Bienvenue Benjamin";
document.body.appendChild(h1);


let bienvenue = document.getElementById("welcome");
function changeColor(){
    if (bienvenue.style.color == "gold"){
        bienvenue.style.color = "black";
    } else { 
        bienvenue.style.color = "gold";
    }
}
bienvenue.addEventListener("click", changeColor);

let googleLink = document.querySelector("#googleLink");
googleLink.addEventListener("click", e =>{
    e.preventDefault();
    alert("Vous ne passerz pas !")
    
    console.log(e.target);
    console.log(e.target.classList);
})