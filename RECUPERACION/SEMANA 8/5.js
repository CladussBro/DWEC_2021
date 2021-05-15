function contar(){
	var texto = document.querySelector('body').innerHTML;
	texto = texto.replace(/\r?\n/g," ");
	texto = texto.replace(/[ ]+/g," ");
	texto = texto.replace(/^ /,"");
	texto = texto.replace(/ $/,"");
	var textoTroceado = texto.split(" ");
	document.querySelector('#nums').innerHTML = textoTroceado.length;
}contar();