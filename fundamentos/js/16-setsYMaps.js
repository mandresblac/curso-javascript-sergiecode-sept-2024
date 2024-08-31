/* SETS Y MAPS */

/* SET */
// Set es un conjunto unico de elementos que no se repiten
let conjunto = new Set([
  "Pedro",
  "Ricardo",
  "María",
  "Pedro",
  "Ricardo",
  "Ricardo",
]);

// para agregar un elemento a un set utilizamos .add()
conjunto.add("Gloria");
//console.log(conjunto);

// para eliminar un elemento de un set utilizamos .delete()
conjunto.delete("Pedro");

//console.log(conjunto);

// para saber si el set contiene un elemento utilizamos .has()
let pregunta1 = conjunto.has("Pedro");
//console.log(pregunta1);

// para saber el tamaño que tiene un set utilizamos .size
let pregunta2 = conjunto.size;
//console.log(pregunta2);

/* MAP */
// Map son un conjunto de pares clave-valor pero no son exactamente iguales a un objeto
let mapa = new Map([
  ["Computadoras", 10],
  ["Tablets", 5],
  ["Celulares", 15],
]);

//console.log(mapa);

mapa.set("Tecladodos", 20);
console.log(mapa);

let pregunta3 = mapa.size;
console.log(pregunta3);

mapa.delete("Computadoras");
console.log(mapa);

let pregunta4 = mapa.has("Tablets");
console.log(pregunta4);
