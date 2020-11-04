function IMC(){
    let peso=document.getElementById("peso").value;
    let altura=document.getElementById("altura").value;
    let indice = (peso/altura);
    alert(indice);
}
function FCM(){
    let edad=document.getElementById("edad").value;
    let frecu = (220 - edad);
    alert(frecu);
}