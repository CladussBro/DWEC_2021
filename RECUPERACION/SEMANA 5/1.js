window.onload = (function () {
    var parrafo = document.getElementById("aver").innerHTML
    console.log(parrafo)
    let divs = document.getElementById("diveaso")
    document.addEventListener("keydown", checkKeyPress, false)
    function checkKeyPress(key) {
        divs.style.backgroundColor = null
        if (key.keyCode == "40") {
            let numero = parseInt(document.getElementById("aver").innerText)
            if (numero<=0) {
                console.log("La velocidad no puede bajar de 0")
                divs.style.backgroundColor = '#ff0000'
                return
            }
            numero--
            document.getElementById("aver").innerText = numero
        }
        if (key.keyCode == "38") {
            let numero = parseInt(document.getElementById("aver").innerText)
            if (numero>=120) {
                console.log("Multaso")
                divs.style.backgroundColor = '#13DEDC'
                return
            }
            numero++
            document.getElementById("aver").innerText = numero
        }
    }
})