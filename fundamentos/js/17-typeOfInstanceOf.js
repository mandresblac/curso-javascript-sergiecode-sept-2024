/* TypeOf & InstanceOf */

// Typeof devuelve el tipo de dato de una variable
let texto = typeof "Pedro";
console.log(texto); // string

let numero = typeof 3.14;
console.log(numero); // number

let boleano = typeof true; // true or false
console.log(boleano); // boolean

let nombres = typeof ["Ricardo", "Pedro", "Maria"];
console.log(nombres); // Devuelve object porque un array es un objeto en javascript

let curso = typeof { curso: "javascript" };
console.log(curso); // object

let funcion = typeof function () {};
console.log(funcion); // function
