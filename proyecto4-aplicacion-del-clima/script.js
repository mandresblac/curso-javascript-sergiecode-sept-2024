const botonBusqueda = document.querySelector("#botonBusqueda");

const api_key = "ad67ee875af9afdecfdaa62c142f371f";

fetch(
  `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid==${api_key}`
)
  .then((response) => response.json())
  .then((response) => console.log(response));
