/* 
Una array en javascript es una estructura de datos que nos permite almacenar varios elementos en una sola variable.
*/

const array = new Array(3); // 5 elementos tiene el array
array[0] = "Curso HTML";
array[1] = "Curso CSS";
array[2] = "Curso JS";

console.log(array);
console.log(array[array.length - 1]); // Para acceder al ultimo elemento del array

const array2 = ["Curso HTML", "Curso CSS", "Curso JS"];
console.log(array2);
console.log(array2[array2.length - 1]); // Para acceder al ultimo elemento del array
