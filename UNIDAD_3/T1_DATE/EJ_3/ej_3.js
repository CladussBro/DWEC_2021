//Crea un programa que muestre la fecha actual en diferentes formatos, 
//según el valor que introduzca el usuario por parámetro:

let eleccion = prompt("Seleccione el formato: \n 1. 15/10/2020 \n 2. Jueves, 15 de octubre de 2020. \n 3. Thursday, October 15, 2020.");
var fecha=new Date();
var options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};

    switch(eleccion){
        case '1':
            console.log(fecha.getDate() + "/" + fecha.getMonth() + "/" + fecha.getFullYear());
        break;
        case '2':
            console.log(fecha.toLocaleDateString("es-ES", options));
        break;
        case '3':
            console.log(fecha.toLocaleDateString("en-US", options));
        break;
    }
