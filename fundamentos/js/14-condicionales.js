/* CONDICIONALES IF - ELSE - IF ELSE - SWITCH  */

// if - else
// Un condicional en javascript es una estructura de control que permite ejecutar distintos bloques de codigo dependiendo de una condicion especifica

// Ejemplo 1
//const edad = parseInt(prompt("Ingresa tu edad:"));

/* if (edad >= 18) {
  alert("Eres mayor de edad.");
} else {
  alert("Eres menor de edad.");
} */

// SWITCH
// ejemplo 2

/* while (true) {
  const estiloDeMusica = parseInt(
    prompt(
      "Selecciona un número para el tipo de musica que mas te guste: \n1. Punk \n2. Hard Rock \n3. Metal \n4. Rock and Roll \n5. Pop \n6. Salir"
    )
  );

  switch (estiloDeMusica) {
    case 1:
      alert("Te recomiendo los ramones.");
      break;
    case 2:
      alert("Te recomiendo los Guns N Roses.");
      break;
    case 3:
      alert("Te recomiendo los pantera.");
      break;
    case 4:
      alert("Te recomiendo los Rolling Stones.");
      break;
    case 5:
      alert("Te recomiendo Michael Jackson.");
      break;
    case 6:
      alert("Adiós!");
      break;
    default:
      alert("No conosco esta musica, pero te recomiendo escuchar Motzart.");
      break;
  }
} */

// ejemplo 3

while (true) {
  const estiloDeMusica = parseInt(
    prompt(
      "Selecciona un número para el tipo de musica que mas te guste: \n1. Punk \n2. Hard Rock \n3. Metal \n4. Rock and Roll \n5. Pop \n6. Salir"
    )
  );

  if (estiloDeMusica === 1) {
    alert("Te recomiendo los ramones.");
  } else if (estiloDeMusica === 2) {
    alert("Te recomiendo los Guns N Roses.");
  } else if (estiloDeMusica === 3) {
    alert("Te recomiendo los pantera.");
  } else if (estiloDeMusica === 4) {
    alert("Te recomiendo los Rolling Stones.");
  } else if (estiloDeMusica === 5) {
    alert("Te recomiendo Michael Jackson.");
  } else if (estiloDeMusica === 6) {
    console.log("Adios!");
    document.body.textContent = "Saliste!";
    break;
  } else {
    alert("No conosco esta musica, pero te recomiendo escuchar Motzart.");
  }
}
