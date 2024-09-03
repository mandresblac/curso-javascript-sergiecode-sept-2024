/* Expresiones regulares */
// Forma de escribir expresiones regulares: /patern/modificadores
let texto = "Este es un curso de javascript y esta dado por Sergie Code 1";

// La "i" es de ignorar mayusculas y minusculas (case sensitive)
let busqueda = texto.search(/sergie/i);

console.log(busqueda); // en el caracter 47 aparece la palabra Sergie

// Modificadores
// "i" para ignorar mayusculas y minusculas (case sensitive)
// "g" para buscar en todo el texto
// "m" parabusqueda multilinea, no se detiene en la primera línea
// "s" permite usar el punto "."

let pattern = /Sergie/i;
let resultado1 = pattern.test(texto);
let resultado2 = pattern.exec(texto);

console.log(resultado1);
console.log(resultado2);

// Busqueda por rango
let pattern2 = /[0-9]/;
let resultado3 = pattern.test(texto);

console.log(resultado3); // true por que encontro el número 1

/* CORREOS ELECTRONICOS CON EXPRESIOENS REGULARES */
let pattern3 = /^[-/w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i; // Patron para validar correos electronicos

console.log(pattern3.test("sergie@1.1")); // false porque no es un correo valido
console.log(pattern3.test("mandresblac@gmail.com")); // true porque es un correo valido
