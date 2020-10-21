//Si el usuario introduce 1, se le deberá pedir una base y un exponente y se mostrará el
//resultado en pantalla (La potencia de X elevado a Y es: )
//Si el usuario introduce 2, se le pedirá un número (no negativo) y se mostrará el resultado en
//pantalla (La raíz de X es: )
//Si el usuario introduce 3, se le pedirá un decimal por pantalla y se mostrará el redondeo al
//entero más próximo, al alta y a la baja.
//Si el usuario introduce 4, se le pedirá un ángulo (entre 0 y 360) y se le mostrarán por pantalla
//los valores trigonométricos del seno, coseno y tangente.

let eleccion = prompt("Seleccione: \n 1. Potencia \n 2. Raíz \n 3. Redondeo \n 4. Trigonometría");
 switch(eleccion){
    case '1':
        let base = prompt("Introduce el valor de la base: ");
        let expon = prompt("Introduce el valor del exponente: ");
        alert(Math.pow(base,expon));
        break;
    case '2':
        let num_posit = prompt("Introduce un número positivo: ");
        alert(Math.sqrt(num_posit));
        break;
    case '3':
        let decimal = prompt("Introduce un número decimal: ");
        alert(Math.round(decimal));
        break;
    case '4':
        let angulo = prompt("Introduce un ángulo entre 0 y 360: ");
        alert("Seno: "+Math.sin(angulo)+"\n Coseno: "+Math.cos(angulo)+"\n Tangente: "+Math.tan(angulo));
        break;
 }