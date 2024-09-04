const botonBusqueda = document.querySelector("#botonBusqueda");

// Api key de OpenWheather
const api_key = "ad67ee875af9afdecfdaa62c142f371f";
const urlBase = "http://api.openweathermap.org/data/2.5/weather";
// Para pasar de grado Kelvin a celcius se resta 273.15 a los grados Kelvin
const diferenciaKelvin = 273.15;

botonBusqueda.addEventListener("click", (event) => {
  const ciudad = document.querySelector("#ciudadEntrada").value;
  if (ciudad) {
    fetchDatosClima(ciudad);
  }
});

function fetchDatosClima(ciudad) {
  fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then((data) => data.json())
    .then((data) => mostrarDatosClima(data));
}

function mostrarDatosClima(data) {
  console.log(data);
  const divDatosClima = document.querySelector("#datosClima");
  divDatosClima.innerHTML = "";

  // Datos de la API
  const nombreCiudad = data.name;
  const nombrePais = data.sys.country;
  const temperatura = data.main.temp;
  const humedad = data.main.humidity;
  const descripcion = data.weather[0].description;
  const icono = data.weather[0].icon;

  /* CREAMOS ELEMENTOS HTML */
  // Creamos un h2
  const ciudadTitulo = document.createElement("h2");
  ciudadTitulo.textContent = `${nombreCiudad}, ${nombrePais}`;

  // Creamos un p
  const temperaturaInfo = document.createElement("p");
  temperaturaInfo.textContent = `La temperatura es: ${Math.round(
    temperatura - diferenciaKelvin
  )}°C`;

  // Creamos un p
  const humedadInfo = document.createElement("p");
  humedadInfo.textContent = `La humedad es: ${humedad}%`;

  // Creamos un elemento img para el icono
  const iconoInfo = document.createElement("img");
  iconoInfo.src = `http://openweathermap.org/img/wn/${icono}@2x.png`;

  // Creamos otro p
  const descripcionInfo = document.createElement("p");
  descripcionInfo.textContent = `La descripción meteorologica es: ${descripcion}`;

  // Agregamos los elementos creados al elemento divDatosClima
  divDatosClima.appendChild(ciudadTitulo);
  divDatosClima.appendChild(temperaturaInfo);
  divDatosClima.appendChild(humedadInfo);
  divDatosClima.appendChild(iconoInfo);
  divDatosClima.appendChild(descripcionInfo);
}
