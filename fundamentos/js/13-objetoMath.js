// El objeto Math nos trae las amtematicas a Javascript

Math.PI; // Devuelve Pi
Math.E; // Devuelve el numero de Euler
Math.SQRT2; // Devuelve la Raiz cuadrada
Math.SQRT1_2; // Devuelve la raiz cuadrada de 1/2
Math.LN2; // Devuelve el logaritmo natural de 2
Math.LN10; // Devuelve el logaritmo natural de 10
Math.LOG2E; // Devuelve el logaritmo de Euler en base 2
Math.LOG10E; // Devuelve el logaritmo de Euler en base 10

const numero1 = 4.5;

console.log(Math.max(numero1)); // Devuelve el número maximo
console.log(Math.min(numero1)); // Devuelve el número minimo
console.log(Math.sqrt(numero1)); // Devuelve la raiz cuadrada

/* METODOS DE REDONDEO */

const numero2 = 2.49;

console.log(Math.round(numero2)); // round() Redondea al entero mas cercano, mayor o igual a 2.5 redondea a 3
console.log(Math.ceil(numero2)); // ceil() redondea hacia arriba al número entero mas cercano
console.log(Math.floor(numero2)); // floor() redondea hacia abajo al número entero mas cercano
console.log(Math.trunc(numero2)); // trunc() trunca el número (devuelve solo la parte entera)

// Random
console.log(Math.random()); // random() devuelve un número aleatorio entre 0 (incluso) y 1 (exclusivo)

// Número aleatorio entre 0 y 10
const numeroAleatorio = Math.floor(Math.random() * 10) + 1; // Se le suma 1 al final para que empiece a contar desde 1 y no desde 0
console.log(`Numero aleatorio entre 1 y 10: ${numeroAleatorio}`);
