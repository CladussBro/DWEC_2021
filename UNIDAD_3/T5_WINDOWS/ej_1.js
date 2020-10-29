var ventana;

function abrirVentana() {
    let abrir = confirm("¿Desea abrir una ventana?");
    let text = "<p>Sed dolor orci, rhoncus vitae efficitur sed, sagittis quis erat. Mauris ut lacus nulla. Etiam dui neque, fringilla eu risus sed, mollis posuere est. Curabitur euismod faucibus neque, non posuere lorem tempor id. Suspendisse vel porttitor arcu, auctor molestie odio. Pellentesque ut auctor nibh. Nulla quis convallis orci. Quisque commodo ornare quam, hendrerit rutrum ipsum vestibulum sed. Nam placerat mauris eu tortor lobortis ultricies.</p><br>";
    if (abrir === true) {
        ventana = window.open("", "ventana", "width=200,height=80,top=500,left=500,toolbar=no,location=no,menubar=no,resizable=no","");
        ventana.document.write(text + '<input type="button" onclick="window.close();" value ="Cerrar">');
    }
}

function cerrarVentana() {
    if (!ventana) {
        alert("La ventana no ha sido abierta");
    } else {
        if (ventana.closed) {
            alert("La ventana está cerrada");
        } else {
            ventana.close();
        }
    }
}

function moverVentana() {
    ventana.moveBy(10, 10);
}

function posicionarVentana() {
    ventana.moveTo(100, 100);
}

function agrandarVentana() {
    ventana.resizeBy(10, 10);
}

function agrandarMasVentana() {
    ventana.resizeBy(400, 200);
}

function scrollArriba() {
    ventana.scrollTo(0, 0);
}

function scroll10() {
    ventana.scrollTo(0, 10);
}