let validaNoVacio=()=>{
    let noVacio=document.getElementById('modelo');
    //la palabra o palabras válidas entre a y z ya sea minúscula o mayúscula
    const regex = /^[a-z]+|^[A-Z]+/
    if (regex.test(modelo)){
        return true;
    }else{
        return false;
    }
}

let validaRef=()=>{
    let refer=document.getElementById('ref');
    //que empiece por dos letras mayúsculas seguidas por un número entre el 0 y el 99, 
    //seguido de una F, un número entre 300 y 8000, el AF en mayúsculas 
    const regexRef = /^(([A-Z]{2})([0-9]{2})([F])([300-8000])([AF])([x-z]+|[X-Z]))$/
    if(regexRef.test(ref)){
        return true;
    }else{
        return false;
    }
}

let validaConsumo=()=>{
    let cons=document.getElementById('consumo');
    //el campo debe estar relleno con un A+++, A++, A+, A, B, C o D
    const regexCons = /^((([A])([+++]))+|^(([A])([++]))+|^(([A])([+]))+|^(([A]))+|^(([B]))+|^(([C]))+|^(([D])))$/
}

let validaPass=()=>{
    let passw=document.getElementById(pass);
    //simbolo # al inicio, dos letras minúsculas, una palabra, carácter, un número (3,7 o 9)
    const regexPass = /^(([#])([a-z]{2})([a-z]{8,16})([&])(([3])+|([7])+|([9])))$/
    if(regexPass.test(pass)){
        return true;
    }else{
        return false;
    }
}
