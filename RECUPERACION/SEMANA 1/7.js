var n = prompt("Introduce un número:");
function factorial(n){
    var a = 1;
    for (let i = n; i > 0; i--) {
        a *=i;        
    }
    alert(a);
}
factorial(n);