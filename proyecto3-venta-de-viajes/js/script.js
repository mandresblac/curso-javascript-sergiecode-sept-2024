import { barcelona, roma, paris, londres } from "./ciudades.js";

// Obtenemos los elementos del DOM, el DOM (Document Object Model) es una representacion esructurada de un documento Html, es un arbol nodos html y cada nodo es un elemento.
const enlaces = document.querySelectorAll("a");
const tituloElemento = document.querySelector("#titulo");
const subTituloElemento = document.querySelector("#subtitulo");
const parrafoElemento = document.querySelector("#parrafo");
const precioElemento = document.querySelector("#precio");

enlaces.forEach((enlace) => {
  enlace.addEventListener("click", () => {
    // Removemos la clase "active" de todos los elementos "a"
    enlaces.forEach((enlace) => {
      enlace.classList.remove("active");
    });

    // Agregar la clase "active" al enlace actual
    enlace.classList.add("active");

    // Obtener el contenido correspondiente según el enlace
    let contenido = obtenerContenido(enlace.textContent);

    // Mostrar el contenido en el DOM
    tituloElemento.innerHTML = contenido.titulo;
    subTituloElemento.innerHTML = contenido.subtitulo;
    parrafoElemento.innerHTML = contenido.parrafo;
    precioElemento.innerHTML = contenido.precio;
  });
});

// Función para traer la información correcta desde el archivo ciudades.js
const obtenerContenido = (enlace) => {
  let contenido = {
    Barcelona: barcelona,
    Roma: roma,
    París: paris,
    Londres: londres,
  };

  return contenido[enlace];
};
