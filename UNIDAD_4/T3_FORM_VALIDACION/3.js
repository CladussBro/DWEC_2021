window.onload = function() {
  console.log('onload');
  document.getElementById('submit').addEventListener('click', validar);
}

let validar = () => {
  if(campo20() && validaAnyo() && validaLocalizacion()) {
      alert('Valida');
  } else {
      alert('Invalido');
  }
}

let campo20 = () => {
  let nombre = document.getElementById('nombre').value;
  let grupo = document.getElementById('grupo').value;

  if(nombre.length <= 20 && grupo.length <= 20) {
      console.log("correcto campo")
      return true;
  } else {
      return false;
  }
}

let validaAnio = () => {
  const regex = /^([0-9]{4})/
  let anyo = document.getElementById('anio').value;
  if(regex.test(anyo)) {
      console.log("correcto anio")
      return true;
  } else {
      return false;
  }
}

let validaLocalizacion = () => {
  let localizacion = document.getElementById('local').value;
  localizacion = parseInt(localizacion);
  if (localizacion === undefined || typeof(localizacion) === "number") {
      console.log("correcto localización")
      return true;
  } else {
      return
  }
}