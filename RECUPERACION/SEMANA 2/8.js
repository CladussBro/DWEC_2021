var num = parseInt(prompt("Introduce un número:"));
var numAleatorio = parseInt(Math.random()*(101-1)+1);
var intentos = 1;
if(isNaN(num)){
    num = prompt("Error, prueba de nuevo: ");
}
while(num!=numAleatorio && !(isNaN(num))){
    if(num>numAleatorio){
        num = parseInt(prompt("El número introducido es mayor que el número que buscas."));
        intentos++;
    }else{
        num = parseInt(prompt("El número introducido es menor que el número que buscas."));
        intentos++;
    }
    if(isNaN(num)){
        alert("El juego ha terminado.");
    }
}
if(num === numAleatorio){
    alert("¡Felicidades! Has acertado."+
    "\n El número de intentos es: "+intentos);
    confirm("¿Quiere jugar de nuevo?");
}