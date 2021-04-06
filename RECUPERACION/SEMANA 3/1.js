var texto = (prompt("Introduce un texto")).toUpperCase();
var clave = parseInt(prompt("Introduce un número para desplazar las letras"));
let cifrado = "";
var letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//Cifrar
var desplazamiento = (clave % 26 + 26) % 26;
if(texto){
    for (let i = 0; i < texto.length; i++) {
        if(letras.indexOf(texto[i])!=-1){
            let posicion = ((letras.indexOf(texto[i])+desplazamiento)%26);
            cifrado += letras[posicion];
        }
        else{
            cifrado += texto[i];
        }
    }
}
console.log('"'+texto+'" CIFRADO = '+cifrado);