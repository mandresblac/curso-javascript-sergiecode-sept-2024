/* Maneho de errores con Try y Catch */

// Try y catch sirven unicamente si trabajamos con tareas sincronas, si trabajamos con tareas asincronas se utiliza "Promesas"

try {
  // En try ponemos codigo que puede fallar,que sepamos que puede fallar, ejmmp: Un llamado al backend a través de un API
  console.log("Llamando al backend");

  // Simulamos un error, para el ejemplo, si el cliente no esta apto para la compra
  throw "Este cliente no esta apto para la compra";

  console.log("Salio todo con exito");
} catch (error) {
  // En catch capturamos el error y hacemos algo que nos paresca correcto con ese error
  console.log("Algo fallo,", error);
} finally {
  // finally se ejecuta simpre, asi falle o no falle
  console.log("Se ejecuta simpre");
}

/* ASINCRONIA
Es la capacidad que tiene javascript de realizar tareas sin bloquear la ejecución del programa principal, en lugar de esperar a que se complete la primera tarea para seguir con la siguiente, javascript permite hacer muchaa tareas en simultaneo e ŕr manejando a medida que este lista la informacion de las tareas anteriores
*/
