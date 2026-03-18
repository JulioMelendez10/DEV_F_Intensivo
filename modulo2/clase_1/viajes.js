import { calcularCosto } from "./costos.js";

const viajes = [];

export const registrarDestino = (destino, fecha, transporte) => {
  const costo = calcularCosto(destino, transporte);

  const viaje = {
    destino,
    fecha,
    transporte,
    costo
  };

  viajes.push(viaje);
};

export const obtenerViajes = () => viajes;