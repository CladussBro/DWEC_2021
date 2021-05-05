window.onload = init;
window.onload = init;
function init(){
    botonEnvio = document.querySelector('[type="button"]');
    nuevoItem = document.querySelector('[type="text"]');
    listaTareas = document.getElementById("listaTareas");
    botonEnvio.addEventListener("click",anadir);
    document.getElementById("resetear").addEventListener("click",resetear);
    rellenarContenido();
}
function anadir(e){
    evento = e || window.event;
    if (nuevoItem.value == ""){
        evento.preventDefault();
    }else{
    var lista = document.createElement("li");
    lista.innerHTML = nuevoItem.value;
    lista.addEventListener("dblclick",eliminarLi);
    listaTareas.appendChild(lista);
    nuevoItem.value = "";
    }
    actualizarCookie();
}
function eliminarLi(){
    this.parentNode.removeChild(this);
    actualizarCookie();
}
function actualizarCookie(){
    setCookie("tarea",listaTareas.innerHTML,7);
}
function resetear(){
    listaTareas.innerHTML ="";
    removeCookie("tarea");
}