/* FUNCIONES */

/* Una funcion es un bloque de codigo reutilizable que realiza una tarea especifica y facilita la no repition de codigo, tiene parametros, se declara la funcion y luego se llama */

// Función declarada
function saludo(nombre) {
  return `¡Hola ${nombre}!`;
}

console.log(saludo("Juan"));

// Función expresada
const despedida = function (nombre) {
  return `Adiós ${nombre}!`;
};

console.log(despedida("Juan"));

// Función anonima
(function (texto) {
  console.log(`Función ${texto}`);
})("Anonima");

// Arrow function
const saludoFlecha = (nombre) => `¡Hola ${nombre}!`;

console.log(saludoFlecha("Pedro"));

/* -------------------------------- */

const operacionAritmetica = (n1, n2, operacion) => {
  switch (operacion) {
    case "+":
      return n1 + n2;
    case "-":
      return n1 - n2;
    case "*":
      return n1 * n2;
    case "/":
      if (n2 === 0) {
        //throw new Error("No se puede dividir por cero.");
        return "No se puede dividir por cero.";
      }
      return n1 / n2;
    case "**":
      return Math.pow(n1, n2);
    case "%":
      return n1 % n2;
    default:
      //throw new Error("Operación no válida.");
      return "Operación no válida.";
  }
};

console.log(operacionAritmetica(5, 3, "+")); // 8
console.log(operacionAritmetica(5, 3, "-")); // 2
console.log(operacionAritmetica(5, 3, "*")); // 15
console.log(operacionAritmetica(5, 0, "/")); // Error: No se puede dividir por cero.
console.log(operacionAritmetica(3, 3, "**")); // 27
console.log(operacionAritmetica(5, 2, "%")); // 2
console.log(operacionAritmetica(8, 0, "/")); // Error: No se puede dividir por cero.
console.log(operacionAritmetica(8, 5, "?")); // Error: No se puede dividir por cero.
