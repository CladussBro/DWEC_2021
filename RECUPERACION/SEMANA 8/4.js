function resaltar() {
    var texto = document.getElementById("texto");
    var palabra = document.getElementById("palabra").value;
    var innerHTML = texto.innerHTML;
    var index = innerHTML.indexOf(palabra);
    if (index >= 0) { 
     innerHTML = innerHTML.substring(0,index) + "<span class='resalto'>" + innerHTML.substring(index,index+palabra.length) + "</span>" + innerHTML.substring(index + palabra.length);
     texto.innerHTML = innerHTML;
    }
  }