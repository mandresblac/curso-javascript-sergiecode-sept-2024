// Seleccion del input de tipo text donde se mostrará el valor
const pantalla = document.querySelector("#pantalla");
// Seleccion de todos los inputs de tipo button
const botones = document.querySelectorAll('input[type="button"]');

// Iteramos sobre los botones y agregamos un evento de clic a cada uno
botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    // Verificamos si el valor del botón no es igual a "=" ni a "C".
    if (boton.value !== "=" && boton.value !== "C") {
      // Si el valor del botón es diferente de "=" y "C", mostramos el valor en la pantalla
      pantalla.value += boton.value;
    }

    borrar(boton);

    calcular(boton);
  });
});

// Funcion para borrar de la pantalla al dar clic en el boton con value "C"
function borrar(boton) {
  if (boton.value === "C") {
    pantalla.value = "";
  }
}

// Funcion para calcular y mostrar resultado de la operacion en la pantalla, al dar clic en el boton con value "="
function calcular(boton) {
  if (boton.value === "=") {
    const valorPantalla = pantalla.value;
    const resultado = eval(valorPantalla); // eval() es un metodo que toma un string y lo evalua como expresion matematica para hacer calculos u operaciones matematicas

    pantalla.value = resultado;
  }
}
