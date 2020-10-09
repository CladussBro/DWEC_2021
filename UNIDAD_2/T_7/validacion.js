function validaDNI() {
    let numero;
    let letr;
    let letra;
    let expresion_regular_dni;
    let dni = document.getElementById("dni").value;
    
    expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
    
    if(expresion_regular_dni.test(dni) == true){
        numero = dni.substr(0,dni.length-1);
        letr = dni.substr(dni.length-1,1);
        numero = numero % 23;
        letra='TRWAGMYFPDXBNJZSQVHLCKE';
        letra=letra.substring(numero,numero+1);
        if (letra!=letr.toUpperCase()) {
            alert("Dni erróneo, la letra del NIF no se corresponde");
        }else{
            alert("Dni correcto");
        }
    }else{
        alert("Dni erróneo, formato no válido");
    }

    }
    console.log(validaDNI);
 