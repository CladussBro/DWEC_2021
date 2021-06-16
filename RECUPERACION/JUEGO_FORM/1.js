var error_anio = document.createTextNode("Error en el año introducido");
var error_hab = document.createTextNode("Error en la habilidad introducida");
var error_tirada = document.createTextNode("Error en la tirada introducida");
var error_pass = document.createTextNode("Error en la password introducida");


function validaAnio(){
    var anio = document.getElementById('anio').value;
    if(anio>=700 && anio<=8000){
        anio = document.getElementById('anio').style.borderColor = "green";
        var div = document.getElementById('errores');
        div.innerHTML = "";
    }else{
        anio = document.getElementById('anio').style.borderColor = "red";
        var p = document.createElement('p');
        var div = document.getElementById('errores');
        div.after(p,error_anio);
    }
}

function validaHabilidades(){
    var hab = document.getElementById('hab').value;
    let regexH = /^(M|WS|BS|S|T|W|A|Ld|Sv)$/;
    if(regexH.test(hab)){
        hab = document.getElementById('hab').style.borderColor = "green";
      }else{
        hab = document.getElementById('hab').style.borderColor = "red";
        var p = document.createElement('p');
        var div = document.getElementById('errores');
        div.after(p,error_hab);
    }
}

function validaTirada(){
    var tirada = document.getElementById('tirada').value;
    const regexT = /^(F)(x2|>|=|<)(R)([0-9]{2})$/;
    if(regexT.test(tirada)){
        tirada = document.getElementById('tirada').style.borderColor = "green";
    }else{
        tirada = document.getElementById('tirada').style.borderColor = "red";
        var p = document.createElement('p');
        var div = document.getElementById('errores');
        div.after(p,error_tirada);
    }
}

function resetear(){
    document.getElementById('reset').reset();
}

function validaPass(){
    var pass = document.getElementById('pass').value;
    const regexP = /^([A-Z]{2})([^A-Za-z0-9_:])([A-Za-z]{8,})(#)(\d{2})$/;
    if(regexP.test(pass)){
        pass = document.getElementById('pass').style.borderColor = "green";
    }else{
        pass = document.getElementById('pass').style.borderColor = "red";
        var p = document.createElement('p');
        var div = document.getElementById('errores');
        div.after(p,error_pass);
    }
}

function validaTodas(){
    validaAnio();
    validaHabilidades();
    validaTirada();
    validaPass();
    crearCookie();
}

function crearCookie() {
    let numeroAleatorio = Math.floor(Math.random() * 6 + 1);;
    let d = new Date();
    d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000);
    let expiracion = "expires=" + d.toUTCString();
    document.cookie = "tirada" + "=" + numeroAleatorio + ";" + expiracion + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
    