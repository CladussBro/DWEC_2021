var x,y;
var obj1=new Array(x,y);

function constructora(){
    x = prompt("Introduce un valor para el punto x");
    y = prompt("Introduce un valor para el punto y");
    if(isNaN(x) || isNaN(y)){
        x = 0, y = 0;
        console.log("Error, has introducido un caracter no numérico.")
    }else{
        var n = ("(")+x.toString()+", "+y.toString()+")";
        console.log(n);
    }
}
function cambiar(){
    x = prompt("Cambiar coordenadas de x");
    y = prompt("Cambiar coordenadas de y");
    var n = ("(")+x.toString()+", "+y.toString()+")";
    console.log(n);
}
function copia(){
    var obj2 = obj1.slice();
    console.log(obj1,obj2);
}
function iguales(){
    var z = prompt("Introduce un valor para el punto z");
    if(z===x){
        console.log("El punto z se encuentra en el mismo lugar que x");
    }else if(z===y){
        console.log("El punto z se encuentra en el mismo lugar que y")
    }else{
        console.log("El punto está en otro lugar distinto de x e y");
    }
}
function suma(){
    var z = prompt("Introduce un valor para el punto z");
    var suma = z+x+y;
    console.log(suma);
}
function obtenerDistancia(){
    var distancia = Math.hypot(x,y);
    console.log(distancia);
}