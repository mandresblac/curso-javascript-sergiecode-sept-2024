/* OPERADORES DE COMPARACION O RELACIONALES */

let x = 5;
let y = "5";

// Compara unicamente el valor.
let w = x == y;
console.log(w); // true

// Igualdad estricta, compara el valor y el tipo de dato.
let z = x === y;
console.log(z); // false

let n = x !== y;
console.log(n); // true

/* OPERADORES LOGICOS */
/* 
and &&
True && True = True
True && false = False
False && True = False
False && False = false

or ||
True || True = True
True || false = True
False || True = True
False || False = false

not !

!True = False
!False = True
*/

let a = 12;
let b = 22;
let c = 8;

let m = a >= b && c <= a;
console.log(m); // false

let p = c >= b || a <= b;
console.log(p); // true
