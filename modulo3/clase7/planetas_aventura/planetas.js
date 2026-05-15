const prompt = require("prompt-sync")();
const planetas = require("./data/planetasData");

const opcion = prompt("¿Quieres ver los planetas? (si/no): ");

if (opcion === "si") {
  planetas.forEach(p => console.log(p.nombre));
} else {
  console.log("Hasta luego explorador 👨‍🚀");
}