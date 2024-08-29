// Tipo de dato Date o fecha

// Forma ISO de poner la fecha: AAAA-MM-DD
// Forma Short: MM-DD-AAA
// Forma Long: Mar-25-2023
const fecha1 = new Date("2021-11-18"); //Forma ISO
const fecha2 = new Date("10-24-2021"); //Forma Short
const fecha3 = new Date("January 25, 2023"); //Forma Long

console.log(fecha1);
console.log(fecha2);
console.log(fecha3);

//Métodos del objeto Date()
//get sirve para extraer o mostrar el valor del objeto Date()
//set modifica el valor del objeto Date()
const diaHoy = new Date();

// get
console.log(diaHoy.getFullYear()); // getFullYear()muestra el año actual
console.log(diaHoy.getMonth()); //getMonth() muestra el mes en el que estamos iniciando el mes de enero en 0, febrero en 1, etc.
console.log(diaHoy.getDate()); // getDate() muestra el dia del mes actual
console.log(diaHoy.getDay()); // getDay() muestra el dia de la semana actual en el que estamos iniciando el domingo en 0, lunes en 1, etc.
console.log(diaHoy.getHours()); // getHours() muestra la hora actual
console.log(diaHoy.getMinutes()); // getMinutes() muestra los minutos actuales
console.log(diaHoy.getSeconds()); // getSeconds() muestra los segundos actuales
console.log(diaHoy.getTime()); // getTime() muestra los milisegundos que han transcurrido desde el 1 de enero de 1970 hasta la actualidad
console.log(diaHoy.setFullYear(2018)); // setFullYear(2018) muestra el año en 2018

const fechaDeHoy = `${diaHoy.getDate()}/${
  diaHoy.getMonth() + 1
}/${diaHoy.getFullYear()}`;

console.log(fechaDeHoy);

//set
console.log(diaHoy.setFullYear(2050));
console.log(diaHoy.setMonth(9));
