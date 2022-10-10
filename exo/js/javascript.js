/* exo1
let leLien = document.getElementById("output1");
leLien.href="https://www.google.fr/";
*/

/* exo2
document.querySelector("#output2").innerHTML = `<div id="output"> <blockquote cite="https://www.google.fr/">L'espoir est un fluide nécessaire à l'homme
comme l'eau à la terre, il déclenche des forces insoupçonnées de
la nature humaine.</blockquote>
<figcaption>-quelqu'un, <cite>Google</cite></figcaption>
</div>`;
*/

/* exo 3
var table = [] 
var list = document.getElementById("output3")[0];
var ligne = list.getElementsByTagName("")
table.remove;
*/

/* exo 4
let div = document.createElement("div");
div.id = "divTp1";

var paragraphe = document.createElement("p");
var text = document.createTextNode(`
Le <strong>World Wide Web Consortium</strong>, abrégé par le
sigle </strong>W3C</strong>, est un <a
href="http://fr.wikipedia.org/wiki/Organisme_de_normalisation"
title="Organisme de normalisation">organisme de
standardisation</a>à but non-lucratif chargé de promouvoir la
compatibilité des technologies du <a
href="http://fr.wikipedia.org/wiki/World_Wide_Web"
title="World Wide Web">World Wide Web</a>.
`);
paragraphe.appendChild(text);
div.appendChild(paragraphe);


document.getElementsByTagName("body")[0].appendChild(div);
*/
