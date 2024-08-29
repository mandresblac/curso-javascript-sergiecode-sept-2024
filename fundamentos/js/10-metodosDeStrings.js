let a = "Cadena de texto";

// Escapando texto
let string = "Let's do it\\";
let string1 = "Let's \ndo it\\";

console.log(string);
console.log(string1);

/* METODOS DE LOS STRINGS */
//.length
let contadorDeLetras = "Murcielago";
console.log(contadorDeLetras.length);

// slice: corta el string.
let contadorDeLetras2 = "Educacion";
let resultado = contadorDeLetras2.slice(4, 7); // slice(comienzo, fin)
console.log(resultado);

// substring() funciona igual que slice(), pero el metodo substring esta deprecado (obsoleto)

// replace reemplaza una palabra
const texto = "La educación es muy importante en Colombia.";
console.log(texto);
const nuevoTexto = texto.replace("Colombia", "el mundo");
console.log(nuevoTexto);

// toUpperCase() convierte todo el texto a mayusculas
const mayusculas = nuevoTexto.toUpperCase();
console.log(mayusculas);

// toLowerCase() convierte todo el texto a mainusculas
const mainusculas = nuevoTexto.toLowerCase();
console.log(mainusculas);

// concat() une dos strings
const unionDeTexto = texto.concat(nuevoTexto);
console.log(unionDeTexto);

// trim() Elmina los espacios adelante y atras.
const textoConEspacios = "      Hola mundo    ";
const textoSinEspacios = textoConEspacios.trim();
console.log(textoSinEspacios);

// trimStart() elimina los espacios al principio
// trimEnd() elimina los espacios al final

// chartAt() recibe un número y devuelve la letra que se ubica en en ese número
const texto2 = "Hola mundo";
const char = texto2.charAt(3);
console.log(char);

// split() divide un strin en array, este metodo es el mas usado.
const frase = "Este texto lo manda el Backend. Divide el texto. Es importante";
const palabras = frase.split(". ");
console.log(palabras);
