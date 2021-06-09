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
    if(hab=='M' || hab=='WS' || hab=='BS' || hab=='S' || hab=='T' || hab=='W' || hab=='A' || hab=='Ld' || hab=='Sv'){
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
    const regexT = /([F]{1})([x2|>|=|<]{0,1})([R]{1})([00-99]{1})/;
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
    const regexP = /([A-Z]{2})([<|>|?|¿|=])([a-z]{8})([#])([0-9]{2})/;
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
}

function setCookie(cname, cvalue, exdays) {
    let num = Math.floor(Math.random() * 6 + 1);
    let d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = 'tirada' + num + "=" + cvalue + "; " + expires;
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