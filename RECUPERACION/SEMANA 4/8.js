function validaFecha(){
    var fecha = prompt("Introduce una fecha en formato dia/mes/año");
    var valida = /^([012][1-9]|3[01])(\/)(0[1-9]|1[012])\2(\d{2})$/;
    var fecha2 = prompt("Introduce otra fecha");
    if(valida.test(fecha) && valida.test(fecha2)){
        console.log(fecha+" - "+fecha2);
        
    }else{
        console.log("Error, has introducido algo mal");
    }
}
validaFecha();
//var fecha1 = new Date("10/04/21");
//var fecha2= new Date("26/04/21");
//var diferencia = fecha1 - fecha2;
//console.log(fecha1+" - "+fecha2+" = "+diferencia);