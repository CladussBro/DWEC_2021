let passw = prompt("Introduce una propuesta de contraseña: ");
let requisitos = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&_-])[a-zA-Z\d@#$%&_-]{8,16}$/;
console.log(requisitos.test(passw));
    if(requisitos.test(passw)){
        alert("La contaseña introducida es segura.");
    } 
    else{
        alert("La contaseña introducida no es segura.");
    }