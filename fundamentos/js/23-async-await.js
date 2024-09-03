/* 
Async/Await
Ws otra forma de trabajar con promesas pero utilizando las palabras reservadas Asyn/Await.

Asyn hace que una función sea asincrona.
Await hace que la función espere a que una promesa se compla antes de continuar con la ejecución del resto del codigo.
*/

import { promesa1 } from "./22-promesas";

async function ejecutarPromesa() {
  const respuestaPromesa1 = await promesa1;
  console.log(respuestaPromesa1);
}

ejecutarPromesa();
