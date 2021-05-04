var array = [4,0,3,4,7,3,5,8,1,8,8,0,2,3,1,2,5,7,3,2,5,1];
var arrayPares = array.filter(function(numero){
    return numero%2 == 0;
});
var arrayImpares = array.filter(function(numero){
    return numero%2 == 1;
});
arrayPares.sort();
arrayImpares.sort();
console.log("Array dado : " + array);
console.log("Array ordenado primero los pares : " + arrayPares.concat(arrayImpares));