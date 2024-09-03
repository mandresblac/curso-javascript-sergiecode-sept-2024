/* Fetch - APIs - JSON */

/* API (Aplication Programing Interface) */
// Api falsa de practica en: https://jsonplaceholder.typicode.com/

const urlBase = "https://jsonplaceholder.typicode.com";
const query = "posts/1";

// METODO GET: Pide informacion al servidor
fetch(`${urlBase}/${query}`)
  .then((response) => response.json())
  .then((json) => console.log(json));

// METODO POST: Enviar informacion del cliente al servidos
const requestBody = {
  title: "Ricardo comenta sobre tu foto",
  body: "Que bella foto",
  userId: 1,
};

fetch(`${urlBase}/posts`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=UTF-8", // Para mandar un JSON
  },
  body: JSON.stringify({ requestBody }),
})
  .then((response) => response.json())
  .then((json) => console.log(json));

// METODO PUT: Actualizar informacion, se actualiza todo.
const posteo = 5;

const requestBody2 = {
  id: 3,
  title: "Ricardo comenta sobre tu foto",
  body: "Que bella foto",
  userId: 1,
};

fetch(`${urlBase}/posts/${posteo}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json; charset=UTF-8", // Para mandar un JSON
  },
  body: JSON.stringify({ requestBody2 }),
})
  .then((response) => response.json())
  .then((json) => console.log(json));

// METODO PATCH: Actualizar una parte especifica de la informacion
const post = 10;
const modificacion = {
  title: "Este titulo ha sido modificado",
};

fetch(`${urlBase}/posts/${post}`, {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json; charset=UTF-8", // Para mandar un JSON
  },
  body: JSON.stringify({ modificacion }),
})
  .then((response) => response.json())
  .then((json) => console.log(json));

// METODO DELETE: Borrar o eliminar un recurso
const elementoAEliminar = 7;

fetch(`${urlBase}/posts/${elementoAEliminar}`, {
  method: "DELETE",
});

/*
JSON (Javascript Object Notation) 
Es un formato de intercambio de datos que sirve para representar datos estructurado como objetos y arrays, y tiene una sintaxis muy parecida a los objetos literales de javascript ya que cuenta con dos llaves que lo encierran {} y adentro hay pares clave:valor (key:value) separados por dos puntos ":" 
*/
