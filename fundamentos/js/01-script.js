const parrafo = document.querySelector("#demostracion");
const boton = document.querySelector("#btn");

parrafo.textContent = "Este texto ha sido generado por Javascript";

boton.addEventListener("click", () => {
  parrafo.textContent = "Texto transformado por JS.";

  setTimeout(() => {
    parrafo.textContent = "Este texto sera transformado por JS.";
  }, 1000);
});
