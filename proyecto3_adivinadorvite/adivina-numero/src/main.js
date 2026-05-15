let numeroSecreto;
let intentosRestantes;

const input = document.getElementById("inputNumero");
const boton = document.getElementById("btnAdivinar");
const mensaje = document.getElementById("mensaje");
const intentosTexto = document.getElementById("intentos");
const reiniciarBtn = document.getElementById("reiniciar");

// Inicializar juego
function iniciarJuego() {
  numeroSecreto = generarNumeroInteligente();
  intentosRestantes = 5;

  mensaje.textContent = "";
  intentosTexto.textContent = `Intentos restantes: ${intentosRestantes}`;
  input.value = "";

  console.log("Número secreto:", numeroSecreto); // debug
}

// Mejor generación de número
function generarNumeroInteligente() {
  return Math.floor(Math.random() * 100) + 1;
}

// Lógica de pistas por cercanía
function obtenerPista(intento) {
  const diferencia = Math.abs(intento - numeroSecreto);

  if (diferencia === 0) return "🎉 ¡Correcto!";

  if (diferencia <= 5) return "🔥 ¡Muy muy cerca!";
  if (diferencia <= 10) return "😯 Muy cerca";
  if (diferencia <= 20) return "🙂 Cerca";
  if (diferencia <= 30) return "😐 Lejos";
  return "🥶 Muy lejos";
}

// Evento principal
boton.addEventListener("click", () => {
  const intento = Number(input.value);

  // Validación
  if (!intento || intento < 1 || intento > 100) {
    mensaje.textContent = "⚠️ Ingresa un número válido (1-100)";
    return;
  }

  if (intentosRestantes <= 0) return;

  intentosRestantes--;

  const pista = obtenerPista(intento);

  if (intento === numeroSecreto) {
    mensaje.textContent = pista;
    intentosTexto.textContent = "🏆 Ganaste!";
    return;
  }

  if (intentosRestantes === 0) {
    mensaje.textContent = `❌ Perdiste. El número era ${numeroSecreto}`;
    intentosTexto.textContent = "Sin intentos";
    return;
  }

  mensaje.textContent = pista;
  intentosTexto.textContent = `Intentos restantes: ${intentosRestantes}`;
});

// Reiniciar
reiniciarBtn.addEventListener("click", iniciarJuego);

// Iniciar al cargar
iniciarJuego();