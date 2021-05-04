var d = new Date();
var dia = d.getDay();
var hora = d.getHours();
if((dia!=6 || dia!=7) && (hora>=9 && hora<=14)){
    document.write("<h1>Bienvenido</h1> <br> Día: "+dia+" <br> Hora: "+hora);
}else{
    document.write("<h1>Página cerrada</h1> <br> Día: "+dia+" <br> Hora: "+hora);
}