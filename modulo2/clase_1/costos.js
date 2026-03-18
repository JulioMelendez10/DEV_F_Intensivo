export const calcularCosto = (destino, transporte) => {
  let costoDestino = 0;

  if (destino === "París") costoDestino = 1000;
  else if (destino === "Roma") costoDestino = 900;
  else if (destino === "Nueva York") costoDestino = 1200;
  else if (destino === "Tokio") costoDestino = 1500;

  let costoTransporte = 0;

  if (transporte === "avion") costoTransporte = 500;
  else if (transporte === "tren") costoTransporte = 200;
  else if (transporte === "bus") costoTransporte = 100;

  return costoDestino + costoTransporte;
};