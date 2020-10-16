//Crea un programa que muestre la hora actual en diferentes formatos, 
//según el valor que introduzca el usuario por parámetro:

let eleccion = prompt("Seleccione el formato: \n 1. 14:35:07 \n 2. 02:35 PM o 02:35:07 AM");
var fecha = new Date();
var options = {hour: "numeric", hour12:"false"};

    switch(eleccion){
        case '1':
            console.log(fecha.toLocaleTimeString());
        break;
        case '2':
            console.log(fecha.toLocaleTimeString("es-ES", options));
        break;
    }