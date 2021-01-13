let validarNombre = () =>{
    let nombre = document.getElementById("nombre").value;
    let nombreRegex = /^([A-Z]+)$/;
    if (nombreRegex.test(nombre)){
        return true;
    }else{
        return false;
    }
}

let validaDNI = () =>{
    let dni = document.getElementById("dni").value;
    let dniRegex = /^([0-9]{2})([.])([0-9]{3})([.])([0-9]{3})([-])([A-Z]{1})$/;
    if (dniRegex.test(dni)){
        return true;
    }else{
        return false;
    }
}

let validaPass = () =>{
    let pass = document.getElementById("pass").value;
    let passRegex = /^([A-Z]{2})([^A-Za-z0-9_:])([a-z]{8})([#])([0-9]{2})$/;
    if (passRegex.test("pass")){
        return true;
    }else{
        return false;
    }
}

let error = () =>{
    if(!validarNombre()){
        document.getElementById("error").innerHTML+=("Escriba un nombre válido.");
        document.getElementById("nombre").focus();
    }
    if(!validaDNI()){
        document.getElementById("error").innerHTML+=("Escriba un DNI válido.")
        document.getElementById("dni").focus();
    }
}