let todo = prompt("Introduce: \n"+
                "nombre:apellidos:telefono:email:codigopostal");


function separar(){
    let cadena=todo.split(/\s*:\s*/);
    console.log("La cadena original es "+todo);
    console.log("Nombre, apellidos, teléfono, email, código postal \n"+cadena);
}

separar(todo);
