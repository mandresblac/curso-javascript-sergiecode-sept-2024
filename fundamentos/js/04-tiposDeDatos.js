/* -------- DATOS PRIMITIVOS O SIMPLES -------- */

// number
let a = 5; // valor entero
let b = 5.2; // valor decimal

// String
let c = "Hola"; // cadena de caracteres
let c2 = "Hola";
let c3 = `Hola`;

// Boolean
let d = true; // valor verdadero
let e = false; // valor falso

// Undefined
let f; // valor indefinido
console.log(f);

// Null
let g = null; // valor nulo
console.log(g);

// NaN
let h = NaN; // valor no numérico
console.log(isNaN(h));

// Symbol
let i = Symbol("miSimbolo"); // valor simbólico
console.log(i);

// bigInt
const bigInt = 123456789n;
console.log(bigInt);

/* -------- DATOS COMPUESTOS O COMPLEJOS -------- */

// Object
const objeto = {
  nombre: "Ricardo",
  apellido: "Lopez",
  edad: 35,
};

console.log(objeto);

// Array
const arreglo = ["Hola", 123, true, [a, b, c]];
console.log(arreglo);

// Date
const fecha = new Date("08/05/2024");
console.log(fecha);

// function
function saludar(nombre) {
  return `¡Hola ${nombre}!`;
}

console.log(saludar("Ricardo"));

/* -------- CASTEO O PARCEO -------- */

let n1 = 5.7;
let n2 = "7.5";

let result = n1 + parseFloat(n2);
console.log(result);
