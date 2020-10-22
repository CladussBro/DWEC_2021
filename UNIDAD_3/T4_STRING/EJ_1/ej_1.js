let nombre = prompt("Introduce tu nombre: ");
let apellido1 = prompt("Introduce tu primer apellido: ");
let apellido2 = prompt("Introduce tu segundo apellido: ");

alert("El tamaño del nombre mas los apellidos es: " + (nombre.length + apellido1.length + apellido2.length))
alert("Tu nombre y apellidos en mayúsculas: \n"+nombre.toUpperCase() + " " + apellido1.toUpperCase() + " " + apellido2.toUpperCase());
alert("Tu nombre y apellidos en minúsculas: \n"+nombre.toLowerCase() + " " + apellido1.toLowerCase() + " " + apellido2.toLowerCase());
alert("Nombre: "+nombre + "\n Apellido 1: " + apellido1 + "\n Apellido 2: " + apellido2);
alert("Una propuesta de nombre de usuario, compuesto por la inicial del nombre, el primer apellido y la inicial del segundo apellido: \n " + nombre.charAt(0).toLowerCase() + apellido1.toLowerCase() + apellido2.charAt(0).toLowerCase());
alert("Una propuesta de nombre de usuario compuesto por las tres primeras letras del nombre y delos dos apellidos: \n" + nombre.substring(0,3).toLowerCase() + apellido1.substring(0,3).toLowerCase() + apellido2.substring(0,3).toLowerCase());
