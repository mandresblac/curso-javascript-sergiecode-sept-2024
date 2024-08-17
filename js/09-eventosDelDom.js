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
