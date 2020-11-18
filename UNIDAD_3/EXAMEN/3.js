let cad = prompt("Introduzca una cadena tipo 'tipo_producto|modelo|cantidad@cz'"+
"\ntipo_producto=(televisor, tablet, smartphone, laptop);"+
"\nmodelo=tres letras mayúsculas y 3 números; "+
"\nla cantidad=número entero;"+
"\ncz=HU, CA, SE.");

let arrayCad = cad.split("|");

let cz = arrayCad[2].split("@");

document.write("<p>Tipo producto: " + arrayCad[0] + "<br> Modelo: " + arrayCad[1] + "<br> Cantidad: " + arrayCad[2] + "<br> Cz: "+ cz[1] + "</p>");