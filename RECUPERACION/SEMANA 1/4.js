let valores = [true, 5, false, "hola", "adios", 2];
function mayor() {
    if(valores[3].length>valores[4].length){
        console.log(valores[3]+" es mayor que "+valores[4]);
        console.log(valores[0]);
    }else{
        console.log(valores[2]);
        console.log(valores[4]+" es mayor que "+valores[3]);
    }
}
mayor();
function suma(){
    console.log("La suma de "+valores[1]+"+"+valores[5]+
    " = "+valores[1]+valores[5]);
}
suma();
function resta(){
    console.log("La resta de "+valores[1]+"-"+valores[5]+
    " = "+(valores[1]-valores[5]));
}
resta();
function multiplicacion(){
    console.log("La multiplicación de "+valores[1]+"*"+valores[5]+
    " = "+valores[1]*valores[5]);
}
multiplicacion();
function division(){
    console.log("La división de "+valores[1]+"/"+valores[5]+
    " = "+valores[1]/valores[5]);
}
division();