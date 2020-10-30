var peso=document.getElementById("peso").nodeValue;
var altura=document.getElementById("altura").nodeValue;
var edad=document.getElementById("edad").nodeValue;

function IMC(){
    var indice = (peso/altura);
    alert(indice);
}
IMC();
function FCM(){
    var frecu = (220 - edad);
    alert(frecu);
}
FCM();