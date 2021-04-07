var texto = prompt("Introduce un texto").toLowerCase();
texto = texto.replace(/\s/g,"");
var palindromo = texto.split("").reverse().toString();

for (let i = 0; i < ((palindromo.length)-1); i++) {
    palindromo = palindromo.replace(",","",".");    
}
if(texto === palindromo){
    alert('"'+texto+'" '+"es un palíndromo");
}else{
    alert('"'+texto+'" '+"no es un palíndromo");
}