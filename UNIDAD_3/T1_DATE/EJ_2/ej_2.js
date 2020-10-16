//Crea un programa que pida por parámetro tu cumpleaños (no hace falta el  año) y saque 
//todos los años en que tu cumpleaños va a caer en domingo  desde este año hasta el año 2100.
//Recuerda que los meses empiezan desde el número 0.

let dia=prompt("Introduce el día de tu cumpleaños");
let mes=prompt("Introduce el mes de tu cumpleaños");

for (let i = 2020; i <= 2100; i++) {
    let cumple = new Date(i,mes-1,dia);
    if(cumple.getDay()==0){
        console.log("En el año "+i+" tu cumple cae en domingo");
    }
}