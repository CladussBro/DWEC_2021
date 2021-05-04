var fecha = new Date();
console.log("FECHA ACTUAL: "+fecha);
console.log(fecha.setHours(26)+" - "+fecha);
console.log(fecha.setMinutes(65)+" - "+fecha);
//Como 26 es más de 24 horas que tiene un día, da la vuelta al reloj
//Los minutos son más de 60 por lo que da la vuelta al reloj