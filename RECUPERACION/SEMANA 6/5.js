var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
function sumar(){
    var s = num1+num2;
    doument.resultado.value = s;
}
sumar();
function restar(){
    var r = num1-num2;
    doument.resultado.value = r;
}
restar();
function multiplicar(){
    var m = num1*num2;
    doument.resultado.value = m;
}
multiplicar();
function dividir(){
    var d = num1/num2;
    doument.resultado.value = d;
}
dividir();