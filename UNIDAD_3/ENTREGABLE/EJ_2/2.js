let c = prompt("Introduce: \n"+
                "nombre:apellidos:telefono:email:codigopostal");


function separar(cadena){
    let todo=cadena.split(/\s*:\s*/);
    document.getElementById("cp").innerHTML="CP="+todo[4];
    document.getElementById("apellidos").innerHTML="Apellidos="+todo[1];
    document.getElementById("email").innerHTML="@="+todo[3];
    document.getElementById("servidor").innerHTML="Servidor= "
                                        +todo[3].split("@")[1];
    console.log("La cadena original es "+todo);
}

separar(c);
