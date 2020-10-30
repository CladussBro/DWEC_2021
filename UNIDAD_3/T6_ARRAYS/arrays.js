let paises = ["Portugal" , "Irlanda" , "Noruega", "España", "USA", "Japón"];
let eleccion = prompt("1. Mostrar número de países."+
                "\n2. Mostrar listado de países."+
                "\n3. Mostrar un intervalo de países."+
                "\n4. Añadir un país.\n5. Borrar un país."+
                "\n6. Consultar un país.");
switch(eleccion) {
    case '1':
        numElementos();
        break;
    case '2':
        let eleccionOrdenada = prompt("Seleccione el orden: \n1. Orden del array."+
                                        "\n2. Del revés.\n3. Ordenados alfabeticamente.")
        if(eleccionOrdenada == '1') {
            mostrarTodo();
        } else if(eleccionOrdenada == '2') {
            inverso();
        } else {
            ordenado();
        }
        break;
    case '3':
        let posInicio = prompt("Introduce la posición de inicio:");
        let posFinal = prompt("Introduce la posición final:");
        mostrarIntervalo(posInicio,posFinal);
        break;
    case '4':
        let addPais = prompt("Introduce el país:");
        let addPaisPosic = prompt("Introduce la posición \n1. Principio.\n2. Final.");
        if (addPaisPosic == '1') {
            añadirPrincipio(addPais);
        } else {
            añadirPrincipio(addPais);
        }
        break;
    case '5':
        let borrarPais = prompt("¿Donde quiere borrar?\n1. Principio.\n2. Final.");
        if (borrarPais == '1') {
            borrarPrincipio();
        } else {
            borrarFinal();
        }
        break;
    case '6':
        let consulta = prompt("Consulta:"+
                                "\n 1. Por posición"+
                                "\n 2. Por nombre");
        if (consulta == '1') {
            let posicion = prompt("Introduzce la posición");
            alert(paises[posicion])
        } else {
            let nombre = prompt("Introduce el nombre");
            if (paises.indexOf(nombre)!=-1) {
                alert(nombre + " se encuentra en el array");
            } else {
                alert("País no encontrado");
            }
        }
        break;
    default:
        alert("Error");
        break;
}

function numElementos() {
    alert("En la lista encontramos " + paises.length + " países.");
}

function mostrarTodo() {
    alert(paises);
}

function inverso() {
    let rever = Array.from(paises);
    rever.reverse();
    alert(rever);
}

function ordenado() {
    let orden = Array.from(paises);
    orden.sort();
    alert(orden);
}

function añadirPrincipio(elemento) {
    paises.unshift(elemento);
    alert(paises);
}

function añadirFinal(elemento) {
    paises.push(elemento);
    alert(paises);
}

function borrarPrincipio() {
    let rever = paises[0];
    alert("Se borrará el elemento " + rever);
    paises.shift();
    alert(paises);
}

function borrarFinal() {
    let rever = paises[paises.length - 1];
    alert("Se borrará el elemento " + rever);
    paises.pop();
    alert(paises);
}

function mostrarPosicion(posicion) {
    alert(paises[posicion]);
}

function mostrarIntervalo(pos1, pos2) {
    alert(paises.slice(pos1,pos2+1));
}
mostrarTodo();