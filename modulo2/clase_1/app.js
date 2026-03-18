import { registrarDestino, obtenerViajes } from "./viajes.js";

const destinoInput = document.getElementById("destino");
const fechaInput = document.getElementById("fecha");
const transporteSelect = document.getElementById("transporte");
const btn = document.getElementById("btnAgregar");
const lista = document.getElementById("lista");

// Evento botón
btn.addEventListener("click", () => {
  const destino = destinoInput.value;
  const fecha = fechaInput.value;
  const transporte = transporteSelect.value;

  if (!destino || !fecha) {
    alert("Completa todos los campos");
    return;
  }

  registrarDestino(destino, fecha, transporte);
  mostrarItinerario();

  destinoInput.value = "";
  fechaInput.value = "";
});

// Mostrar viajes
const mostrarItinerario = () => {
  const viajes = obtenerViajes();

  lista.innerHTML = "";

  viajes.forEach((viaje, i) => {
    lista.innerHTML += `
      <p>
        <strong>Viaje ${i + 1}</strong><br>
        Destino: ${viaje.destino}<br>
        Fecha: ${viaje.fecha}<br>
        Transporte: ${viaje.transporte}<br>
        Costo: $${viaje.costo}
      </p>
      <hr>
    `;
  });
};