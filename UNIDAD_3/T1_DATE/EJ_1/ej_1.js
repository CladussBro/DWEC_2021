//Crea un programa que muestre el número de días que quedan desde hoy hasta el fin de curso 
//(por ejemplo, el 24 de junio). Recuerda que los meses empiezan desde el número 0

restaFechas = function(f1,f2){
    var a1 = f1.split('/');
    var a2 = f2.split('/');
    var fecha1 = Date.UTC(a1[2],a1[1]-1,a1[0]);
    var fecha2 = Date.UTC(a2[2],a2[1]-1,a2[0]);
    var resta = fecha2 - fecha1;
    var num_dias = Math.floor(resta / (1000 * 60 * 60 * 24));
    return num_dias;
    }
    var f1 = '15/10/2020';
    var f2='24/06/2021';
   alert((restaFechas(f1,f2))+" días.");