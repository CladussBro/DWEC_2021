window.onload = (function () {
    var parrafo = document.getElementById("aver").innerHTML
    console.log(parrafo)
    let divs = document.getElementById("diveaso")
    document.addEventListener("keydown", checkKeyPress, false)
    function checkKeyPress(key) {
        divs.style.backgroundColor = null
        if (key.keyCode == "40") {
            console.log("tecla abajo presionada")
            let numero = parseInt(document.getElementById("aver").innerText)
            if (numero<=0) {
                console.log("No se puede bajar de 0")
                divs.style.backgroundColor = '#ff0000'
                return
            }
            numero--
            document.getElementById("aver").innerText = numero
        }
        if (key.keyCode == "38") {
            console.log("tecla arriba presionada")
            let numero = parseInt(document.getElementById("aver").innerText)
            if (numero>=120) {
                console.log("Has superado el limite de velocidad")
                divs.style.backgroundColor = '#13DEDC'
                return
            }
            numero++
            document.getElementById("aver").innerText = numero
        }
    }
})