function validaFecha(){
    var fecha1 = prompt("Introduce una fecha en formato dia/mes/año");
    var valida = /^([012][1-9]|3[01])(\/)(0[1-9]|1[012])\2(\d{2})$/;
    var fecha2 = prompt("Introduce otra fecha");
    if(valida.test(fecha1) && valida.test(fecha2)){
        console.log(fecha1+" - "+fecha2);
    }else{
        fecha1 = prompt("Error, introduce una nueva fecha para fecha1");
        fecha2 = prompt("Introduce una nueva fecha para fecha2");
        console.log(fecha1+" - "+fecha2);
    }
    var date1 = new Date(2021,04,26);
    var date2 = new Date(2021,05,29);
    diferencia = date1-date2;
    console.log("Diferencia "+diferencia+" en milisegundos");
}
validaFecha();