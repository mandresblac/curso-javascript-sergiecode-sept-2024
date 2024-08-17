/* 
Un evento en javascript es una acción o suceso que pasa dentro de la
pagina web, puede ser desencadenado por el usuario al hacer clic en un boton, arrastrar algo o por el mismo navegador al terminar de cargar un recurso o terminar de cargar la pagina, cerrarla, etc. 
*/

/* EVENTOS DEL DOM */
const boton = document.querySelector("#btn");

//boton.addEventListener("click", mostrar);
//boton.addEventListener("mouseover", mostrar);
//boton.addEventListener("mouseout", mostrar);
/* document.body.addEventListener("keydown", () => {
  document.body.innerHTML = "Hola mundo";
}); */

function mostrar() {
  document.querySelector("#seleccionable").innerHTML = Date();
  document.body.style.background = "#232534";

  setTimeout(() => {
    document.querySelector("#seleccionable").innerHTML = "";
    document.body.style.background = "#10121d";
  }, 2000);
}
