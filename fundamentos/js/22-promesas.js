/* Promesas (Promises)
Las promesas en javascript son un tipo especial de objeto que nos premite realizar tareas asincronas y luego manejar los resultados,
una promesa puede fallar o tener exito y esto nos va a devolver un valor que podremos utilizar en nuestro codigo.

Las promesas nos permiten manejar una secuencialidad de acciones y se utilizan con mayor frecuencia para consumir APIs 

Las promesas primero se declaran asi:
const promesa = new Promise((resolve, reject) => {
  codigo interno de la promesa
})

y luego se llama o consumen.
promesa
  .then((resultado) => console.log(resultado))
  .catch((error) => console.log(error));

En los Promises hay 3 valores posibles:
- fullfilled - La promesa (o Promise) se cumplido
- rejected - La promesa (o Promise) no se cumplio
- pending - La promesa (o Promise) está pendiente, es decir, no se ha cumplido ni tampoco ha sido rechazada
*/

// Declaramos una promesa
export const promesa1 = new Promise((resolve, reject) => {
  let respuesta = "Salio todo bien.";
  resolve(respuesta);
  reject("Fallo, algo salio mal.");
});

// Consumimos la promesa
promesa1
  .then((resultado) => console.log(resultado))
  .catch((error) => console.error(error));
