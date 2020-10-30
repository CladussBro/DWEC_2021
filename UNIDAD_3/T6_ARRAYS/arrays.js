let matriz = ["Portugal" , "Irlanda" , "Noruega", "España", "USA"];

function numElementos() {
    alert("Existen " + matriz.length + " elementos.");
}

function mostrarTodo() {
    alert(matriz);
}

function inverso() {
    let aux1 = Array.from(matriz)
    aux1.reverse();
    alert(aux1);
}

function ordenado() {
    let aux2 = Array.from(matriz)
    aux2.sort();
    alert(aux2);
}

function añadirPrincipio(elemento) {
    matriz.unshift(elemento);
    alert(matriz);
}

function añadirFinal(elemento) {
    matriz.push(elemento) ;
    alert(matriz);
}

function borrarPrincipio() {
    let aux1 = matriz[0];
    alert("Se borrará el elemento " + aux1);
    matriz.shift();
    alert(matriz);
}

function borrarFinal() {
    let aux1 = matriz[matriz.length - 1];
    alert("Se borrará el elemento " + aux1);
    matriz.pop();
    alert(matriz);
}

function mostrarPosicion(posicion) {
    alert(matriz[posicion]);
}

function mostrarIntervalo(pos1, pos2) {
    alert(matriz.slice(pos1,pos2+1));
}

mostrarTodo();

let res = prompt("Seleccione una opción:\n1. Mostrar número de países.\n2. Mostrar listado de países.\n3. Mostrar un intervalo de países.\n4. Añadir un país.\n5. Borrar un país.\n6. Consultar un país.")
switch(res) {
    case '1':
        numElementos();
        break;
    case '2':
        let resOrden = prompt("¿En que orden quiere mostrarlo?\n1. Orden del array.\n2. Del revés.\n3. Ordenados alfabeticamente.")
        if(resOrden == '1') {
            mostrarTodo();
        } else if(resOrden == '2') {
            inverso();
        } else {
            ordenado();
        }
        break;
    case '3':
        let resPos1 = prompt("Introduzca la posicion de inicio:");
        let resPos2 = prompt("Introduzca la posicion final:");
        mostrarIntervalo(resPos1,resPos2);
        break;
    case '4':
        let resAdd = prompt("Introduzca el pais:");
        let resAddPos = prompt("¿Donde quiere introducirlo?\n1. Principio.\n2. Final.");
        if (resAddPos == '1') {
            añadirPrincipio(resAdd);
        } else {
            añadirPrincipio(resAdd);
        }
        break;
    case '5':
        let resDelPos = prompt("¿Donde quiere borrar?\n1. Principio.\n2. Final.");
        if (resDelPos == '1') {
            borrarPrincipio();
        } else {
            borrarFinal();
        }
        break;
    case '6':
        let resConsul = prompt("¿Como quiere consultarlo?:\n1. Por posicion.\n2. Por nombre.");
        if (resConsul == '1') {
            let resPosicion = prompt("Introduzca la posicion");
            alert(matriz[resPosicion])
        } else {
            let resNombre = prompt("Introduzca el nombre");
            if (matriz.indexOf(resNombre)!=-1) {
                alert(resNombre + " se encuentra en el array.");
            } else {
                alert("Pais no encontrado");
            }
        }
        break;
    default:
        alert("Error");
        break;
}