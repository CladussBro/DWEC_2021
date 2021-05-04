var velocidad = document.querySelector('p');
document.addEventListener('keyup', increment , false);
document.addEventListener('keydown', down , false);
function increment(){
    var number = parseInt(p.innerText);
    number++;
    p.innerText = number;
    if(velocidad>120){
        alert("Multaso pa ti");
    }
}
function down(){
    var number = parseInt(p.innerText);
    number--;
    p.innerText = number;
    if(velocidad<0){
        alert("Error, la velocidad no puede bajar de 0");
    }
}