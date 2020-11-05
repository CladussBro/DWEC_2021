function comenzar(){
    document.getElementById("reload").onclick = anotherCard;
    sacarBola();
}

function rellenarCarton(){
    let matriz = [];
    let random = () => Math.floor((Math.random() * (99-1)) + 1);
    for (let x = 0; x < size; x++){
        matriz[x] = [];
        for (let y = 0; y < size; y++){
        matriz[x][y] = random();
        }
    }
    return matriz;
}
console.log(rellenarCarton(5));

function sacarBola(){
    let continua;
    let bola = Math.floor(Math.random() * (99-1) + 1); 
    console.log(bola);
}