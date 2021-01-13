let info = document.getElementById("info");

//Número de hijos de body (p)
let parrafos = document.getElementsByTagName("p");
//Texto del segundo párrafo
let parrafo2 = parrafos[1];
//Número de enlaces de la página
let enlaces = document.getElementsByTagName("a");
//Dirección del primer enlace
let enlace1 = enlaces[0];
//Dirección del penúltimo enlace
let enlace2 = enlaces[enlaces.length-1];
//Número de enlaces que apuntan a /wiki/Municipio

//Número de enlaces del primer párrafo


//Mensaje (div)
info.innerHTML += "El número de hijos es " + parrafos.length;
info.innerHTML += "El texto del segundo párrafo es "+ parrafo2.textContent;
info.innerHTML += "El número de enlaces en la página es "+ enlaces.length;
info.innerHTML += "La dirección del primer enlace es "+enlace1;
info.innerHTML += "La dirección del penúltimo enlace es "+enlace2;