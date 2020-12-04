window.onload=iniciar;
var formulario = objeto.form;
for (var i = 0; i < formulario.elements.length; i++) {
if (formulario.elements[i].type == "text" && formulario.elements[i].value == "") {
    alert("El campo: " + formulario.elements[i].name + " no puede estar en blanco");
    formulario.elements[i].className = "error";
    formulario.elements[i].focus();
    return false;
    }
}
if (formulario.elements[i].type == "text" && formulario.elements[i].value == "") {
    alert("El campo: " + formulario.elements[i].name + " no puede estar en blanco");
    formulario.elements[i].className = "error";
    formulario.elements[i].focus();
    return false;
    }

function iniciar() {
    document.getElementById("enviar").addEventListener("click", validar, false);
}
function validaEdad(){
    if (formulario.elements[i].id == "edad") {
        if (
        isNaN(formulario.elements[i].value) ||
        formulario.elements[i].value < 0 ||
        formulario.elements[i].value > 105
        ) {
        alert(
        "El campo: " +
        formulario.elements[i].name +
        " posee valores incorrectos o la edad <0 o >105"
        );
        }
        }
}
function validaDNI() {
    valor = document.getElementById("nif").value;
    varletras = [
    "T","R","W","A","G","M","Y","F","P","D","X","B",
    "N","J","Z","S","Q","V","H","L","C","K","E","T",
    ];
    if (!/^\d{8}[A-Z]$/.test(valor)) {
    return false;
    }
    if (valor.charAt(8) != letras[valor.substring(0, 8) % 23]) {
    return false;
    }
    return true;
    }
function validaEmail() {
    valor = document.getElementById("email").value;
    if (!/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor)) {
    return false;
    }
    return true;
    }
function validaTelefono() {
    valor = document.getElementById("telefono").value;
    if (!/^\d{9}$/.test(valor)) {
    return false;
    }
    return true;
    }
function validaFecha() {
    vardia = document.getElementById("dia").value;
    varmes = document.getElementById("mes").value;
    varano = document.getElementById("ano").value;
    fecha = new Date(ano, mes, dia);
    if (!isNaN(fecha)) {
    return false;
    }
    return true;
}
  

function crearCookie(cname, cvalue, exdays) {
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
    return ""; 
}
function comprobarCookie() {
    var username = getCookie("username");
    if (username != "") {
    alert("Bienvenido de nuevo, " + username);
    } else {
    username = prompt("Introduzca su nombre:", ""); 
    if (username != "" && username != null) {
    setCookie("username", username, 365);
    }
    }
}