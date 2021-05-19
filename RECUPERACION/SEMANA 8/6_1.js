function rev(){
    var texto = document.querySelector('body').innerHTML;
    var reversed = '';
    for(var i = texto.length-1; i >=0; i--){
        reversed += texto[i];
    }
    document.querySelector('body').innerHTML = reversed;
    texto.reversed = true;
}rev();