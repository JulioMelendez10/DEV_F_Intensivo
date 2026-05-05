const mesasDisponibles = 5;

function logMensaje(mensaje, tipo = "") {
  const log = document.getElementById("log");
  const p = document.createElement("p");
  p.textContent = mensaje;
  if (tipo) p.classList.add(tipo);
  log.appendChild(p);
  log.scrollTop = log.scrollHeight;
}

function verificarDisponibilidad(mesasSolicitadas) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mesasSolicitadas <= mesasDisponibles) {
        resolve(`✅ Hay disponibilidad para ${mesasSolicitadas} mesa(s)`);
      } else {
        reject(`❌ No hay suficientes mesas. Disponibles: ${mesasDisponibles}`);
      }
    }, 1000);
  });
}

function enviarConfirmacionReserva(nombreCliente) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = Math.random() > 0.3;
      if (exito) {
        resolve(`📧 Correo enviado a ${nombreCliente}`);
      } else {
        reject(`❌ Error al enviar correo a ${nombreCliente}`);
      }
    }, 1000);
  });
}

async function hacerReserva(nombreCliente, mesasSolicitadas) {
  try {
    logMensaje(`🔎 Verificando disponibilidad...`);

    const disponibilidad = await verificarDisponibilidad(mesasSolicitadas);
    logMensaje(disponibilidad, "success");

    logMensaje("📝 Confirmando reserva...");

    const confirmacion = await enviarConfirmacionReserva(nombreCliente);
    logMensaje(confirmacion, "success");

    logMensaje(`🎉 Reserva completada para ${nombreCliente}`, "success");
  } catch (error) {
    logMensaje(error, "error");
  }
}

function hacerReservaUI() {
  const nombre = document.getElementById("nombre").value;
  const mesas = parseInt(document.getElementById("mesas").value);

  if (!nombre || !mesas) {
    logMensaje("⚠️ Completa todos los campos", "error");
    return;
  }

  hacerReserva(nombre, mesas);
}