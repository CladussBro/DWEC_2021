let n;
var n1;
var n2;
let r;
document.querySelector('#sumar').addEventListener('click', () =>{
    n = '+';
});
document.querySelector('#restar').addEventListener('click', () =>{
    n = '-';
});
document.querySelector('#multiplicar').addEventListener('click', () =>{
    n = '*';
});
document.querySelector('#dividir').addEventListener('click', () =>{
    n = '/';
});

document.querySelector('#calcular').addEventListener('click', () =>{
    n1 = parseInt(document.querySelector('#num1').value);
    n2 = parseInt(document.querySelector('#num2').value);
    if(n == '+'){
        r = n1 + n2;
    }else if( n == '-'){
        r = n1 - n2;
    }else if(n == '*'){
        r = n1 * n2;
    }else if(n == '/'){
        r = n1 / n2;
    }
    document.querySelector('#resultado').innerHTML = r;
});

function borrar(){
    document.querySelector('#num1').value = 0;
    document.querySelector('#num2').value = 0;
    document.querySelector('#resultado').innerHTML = 0;
}borrar();