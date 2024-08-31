/* Bucles For, While, etc */

// Ciclo for clascio
const seleccionable = document.querySelector("#seleccionable");
let texto = "";

// indices           0       1         2          3         4
let tecnologias = ["HTML", "CSS", "JAVASCRIPT", "REACT", "ANGULAR"];

for (let index = 0; index < tecnologias.length; index++) {
  texto += `${tecnologias[index]}`;

  // Para agregar una coma "," entre palabras menos al final
  if (index < tecnologias.length - 1) {
    texto += ", ";
  }
  seleccionable.textContent = texto;
}

// Ciclo for of, para recorrer un array
for (const tecnologia of tecnologias) {
  //console.log(tecnologia);
}

// Ciclo for in, para iterar unicamente objetos
const persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 30,
  tecnologias: ["HTML", "CSS"],
};

for (const key in persona) {
  //console.log(persona[key]);
}

// Ciclo forEach, para recorrer un array
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numeros.forEach((numero) => {
  //console.log(numero);
});

// Ciclo while
let edad = 0; // Variable de inicialización

/* while (edad < 18) {
  console.log(`Tienes ${edad} años y áun eres un niño.`);
  edad++; // incremento
} */

// console.log(`Tienes ${edad} años y ya eres mayor de edad.`);

// Ciclo do-while, se ejecuta al menos una vez
do {
  console.log(`Tienes ${edad} años y áun eres un niño.`);
  edad++; // incremento
} while (edad < 18);

console.log(`Tienes ${edad} años y ya eres mayor de edad.`);
