var destinatario = document.getElementById('destinatario').value;
var etiqueta = document.getElementById('etiqueta').value;

function validaDestinatario(){
    var regexD = /([#])([0-9]{3})([AM])/;
    if(regexD.test(destinatario)){
        console.log(destinatario);
        document.getElementById('destinatario').style.borderColor = "green";
    }else if(regexD.test(destinatario)){
        console.log(destinatario);
        var errorD = document.getElementById('errorD');
        errorD.innerHTML = "Error en el destinatario introducido";
        document.getElementById('destinatario').style.borderColor = "red";
    }
}

function validaEtiqueta(){
    var regexE = /([0-9|-]{27})([X|Y|Z])/;
    if(regexE.test(etiqueta)){
        console.log(etiqueta);
        document.getElementById('etiqueta').style.borderColor = "green";
    }else{
        var errorE = document.getElementById('errorE');
        errorE.innerHTML = "Error en la etiqueta introducida";
        document.getElementById('etiqueta').style.borderColor = "red";
    }
}

function validaTodas(){
    validaDestinatario();
    validaEtiqueta();
    setCookie();
    getCookie();
    muestraCookie();
}

function todo(){
    xml();
    fetch();
    generarTabla();
}

let resultXML;

function xml(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200){
            document.getElementById('tabla').innerHTML = this.responseText;
        }
    }
    xhr.open('GET','https://ghibliapi.herokuapp.com/vehicles',true);
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xhr.send();
}

let resultFetch;

function fetch(){
    fetch('insertar_vehiculos.php',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'}
    })
    .then(res=>res.json())
    .catch(error=>console.error('Request failed',error))
    .then(response => console.log('Successful request',response));
}

function generarTabla(){
    var tabla = document.getElementById('tabla');
    var tablita = document.createElement('table');
    document.insertAfter(tablita,tabla);
}

function setCookie(cname, value, dias) {
    cname = "idColection";
    var fecha = new Date();
    fecha.setTime(fecha.getTime()+(dias*24*60*60 * 1000));
    var expira = "expires= "+ fecha.toUTCString();
    document.cookie = cname + "=" + value + ";" + expira + ";path=/";
}

function getCookie(cname){
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split('');
    for (var i = 0; i < ca.length; i++){
        var c = ca[i];
        while (c.charAt(0) == ''){
            c = c.substring(1);
        }
        if(c.indexOf(name) == 0){
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function muestraCookie(){
    var div = document.getElementById('div');
    div.innerHTML = document.cookie;
}