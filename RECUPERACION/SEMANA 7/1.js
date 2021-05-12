var texto = prompt("Introduce un texto filosófico");
var num = prompt("Introduce un número del 1 al 10");
while(num>10 || num<0 || isNaN(num)){
    num = prompt("Ha introducido datos erróneos, prueba de nuevo");
}
if(num && texto){
    if(num<=9){
        $('<li />').addClass('new-li').insertBefore($('li').eq(num-1)).css('bold');
        $('.new-li').append(texto.bold());
    }else if(num>9){
        $('<li />').addClass('new-li').insertAfter($('li').eq(num-2)).css('bold');
        $('.new-li').append(texto.bold());
    }
}