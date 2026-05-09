// Acceso a Zod
const { z } = window.Zod;

// Esquema de validación
const schema = z.object({
  nombre: z
    .string()
    .min(3, "El nombre debe tener al menos 3 caracteres"),

  email: z
    .string()
    .email("Correo electrónico inválido"),

  password: z
    .string()
    .min(6, "La contraseña debe tener mínimo 6 caracteres")
});

// Referencias al DOM
const form = document.getElementById("formulario");
const nombreInput = document.getElementById("nombre");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// Errores
const errorNombre = document.getElementById("error-nombre");
const errorEmail = document.getElementById("error-email");
const errorPassword = document.getElementById("error-password");

const mensajeExito = document.getElementById("exito");

// 🔁 VALIDACIÓN EN TIEMPO REAL
function validarCampo(campo, valor) {
  const resultado = schema.safeParse({
    nombre: nombreInput.value,
    email: emailInput.value,
    password: passwordInput.value
  });

  limpiarErrores();

  if (!resultado.success) {
    resultado.error.errors.forEach(err => {
      if (err.path[0] === "nombre") {
        errorNombre.textContent = err.message;
      }
      if (err.path[0] === "email") {
        errorEmail.textContent = err.message;
      }
      if (err.path[0] === "password") {
        errorPassword.textContent = err.message;
      }
    });
  }
}

// Eventos en tiempo real
nombreInput.addEventListener("input", () => validarCampo());
emailInput.addEventListener("input", () => validarCampo());
passwordInput.addEventListener("input", () => validarCampo());

// Limpiar errores
function limpiarErrores() {
  errorNombre.textContent = "";
  errorEmail.textContent = "";
  errorPassword.textContent = "";
  mensajeExito.textContent = "";
}

// 📩 ENVÍO DEL FORMULARIO
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const datos = {
    nombre: nombreInput.value,
    email: emailInput.value,
    password: passwordInput.value
  };

  const resultado = schema.safeParse(datos);

  limpiarErrores();

  if (!resultado.success) {
    resultado.error.errors.forEach(err => {
      if (err.path[0] === "nombre") {
        errorNombre.textContent = err.message;
      }
      if (err.path[0] === "email") {
        errorEmail.textContent = err.message;
      }
      if (err.path[0] === "password") {
        errorPassword.textContent = err.message;
      }
    });
  } else {
    mensajeExito.textContent = "✅ Registro exitoso";
    form.reset();
  }
});