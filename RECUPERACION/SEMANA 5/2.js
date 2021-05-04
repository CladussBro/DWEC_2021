function cambiar(elem) {
    var imagen = document.getElementById("foto");
    imagen.src = elem.value;
}
function drop(){
    document.getElementById("text_id").style.visibility = "visible";
}
function validaSerie(){
    var serie = document.getElementById("serie");
    var valida = /([0-9]{3})([A-Z]{4})([1]|[2]|[A])/;
    if(valida.test(serie)){
        console.log("¡Correcto!")
    }else{
        alert("Error, número de serie incorrecto.")
    }
}