window.onload = init;
window.onload = init;

function init() {
    botonEnvio = document.querySelector('[type="button"]');
    nuevoItem = document.querySelector('[type="text"]');
    listaTareas = document.getElementById("listaTareas");
    botonEnvio.addEventListener("click", anadir);
    setCookie("tarea",listaTareas,7);
}

function anadir(e) {
    evento = e || window.event;
    if (nuevoItem.value == "") {
        evento.preventDefault();
    } else {
        var lista = document.createElement("li");
        lista.innerHTML = nuevoItem.value;
        lista.addEventListener("dblclick", eliminarLi);
        listaTareas.appendChild(lista);
        nuevoItem.value = "";
    }
}
//elimina elemento de la lista
function eliminarLi() {
    this.parentNode.removeChild(this);
    actualizarCookie();
}

function setCookie(cname, cvalue, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1);
        if (c.indexOf(name) == 0)
            return c.substring(name.length, c.length);
    }
    return "";
}
function checkCookie() {
    var username = getCookie("tarea"); 
    if (username != "") {
    // Si no está vacío 
    } else {
    username = prompt("Introduzca su nombre:", ""); 
    if (username != "" && username != null) {
    setCookie("tarea", username, 7);
    }
    }
}
checkCookie();
function readCookie(name) {
    var nameEQ = name + "="; 
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) {
        return decodeURIComponent( c.substring(nameEQ.length,c.length) );
      }
  
    }
    return null;
}
//actualiza la cookie
function actualizarCookie(){
    setCookie("tarea",listaTareas.innerHTML,7);
}