document.cookie = nuevaCookie;

function setCookie(nombre, value, dias) {
    var d = new Date();
    d.setTime(d.getTime() + dias * 24 * 60 * 60 * 1000);
    let expiracion = "expires=" + d.toUTCString();
    var prevCookie = valoresCookie("tarea");

    if (prevCookie) {
        var curCookie = nombre + "=" + prevCookie + "," + value + "; " + expiracion;
    } else {
        var curCookie = nombre + "=" + value + "; " + expiracion;
    }
    document.cookie = curCookie;
}

function valoresCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');

    for (var i = 0; i < ca.length; i++) {

        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) {
            return decodeURIComponent(c.substring(nameEQ.length, c.length));
        }
    }
    return null;
}