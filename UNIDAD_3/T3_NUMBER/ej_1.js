//Crea un programa que pida al usuario un número entero por pantalla y muestre:
//Su valor exponencial.
//El número con 4 decimales.
//El número en binario.
//El número en octal.
//El número en hexadecimal.
//Utiliza para ello los métodos del objeto Number.
//Como datos de muestra, si metes 50, deberías obtener: 5e1 / 50.0000 / 00110010 / 62 / 0x32

let num = prompt("Introduce un número: ");
let exp = Math.exp(num);
let decimal = num.toFixed(4);
let binario = num.toString(2);
let octal = num.toString(8);
let hex = num.toString(16);
alert("Número: "+num+
        "\n Exponente: "+exp+
        "\n Decimales: "+decimal+
        "\n Binario: "+binario+
        "\n Octal: "+octal+
        "\n Hexadecimal: "+hex);