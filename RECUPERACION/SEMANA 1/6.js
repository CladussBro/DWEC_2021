var letras = ["T","R","W","A","G","M","Y","F","P","D","X","B",
                "N","J","Z","S","Q","V","H","L","C","K","E","T",];

var dniNums = prompt("Introduce tu DNI sin la letra");
var dniLetra = prompt("Introduce la letra de tu DNI").toUpperCase();

    if(dniNums<0 || dniNums>99999999){
        alert("El dni introducido no es correcto");
    }else{
        var letraCalculada = letras[dniNums%23];
        if(letraCalculada==dniLetra){
            console.log("Los datos son correctos");
        }else{
            console.log("Los datos no coinciden con la letra calculada");
        }
    }
