const auto1 = {
  marca: "Ford",
  modelo: "Mustang",
  anio: 1969,
  peso: 1400,
  color: "Rojo",
};

const auto2 = {
  marca: "Renault",
  modelo: "Clio",
  anio: "2016",
  peso: 1100,
  color: "Gris",
};

console.log("Auto 1: ", auto1);
console.log("Auto 2: ", auto2);
console.log("El color del Auto 1 es:", auto1.color);
console.log("El color del Auto 2 es:", auto2["color"]);

const vendedor = {
  nombre: "Pedro",
  apellido: "Garcia",
  empresa: "Auto S.A.",
  habililidadesBlandas: ["Carisma", "Puntualidad"],
  vender: function () {
    return "Pedro ha vendido un auto.";
  },
  nombreCompleto: function () {
    return this.nombre + " " + this.apellido;
  },
};

console.log(vendedor.vender());
console.log(vendedor.nombreCompleto());
console.log(vendedor.habililidadesBlandas);
