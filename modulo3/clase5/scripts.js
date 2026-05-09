document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const fecha = document.getElementById("fecha").value;
    const mensaje = document.getElementById("mensaje");

    const intereses = document.querySelectorAll('input[name="intereses"]:checked');
    const horario = document.querySelector('input[name="horario"]:checked');

    mensaje.style.color = "red";

    // 🔴 VALIDACIÓN 1: Nombre mínimo 3 caracteres
    if (nombre.length < 3) {
        mensaje.textContent = "El nombre debe tener al menos 3 caracteres.";
        return;
    }

    // 🔴 VALIDACIÓN 2: Teléfono solo números y 10 dígitos
    const telefonoRegex = /^[0-9]{10}$/;
    if (!telefonoRegex.test(telefono)) {
        mensaje.textContent = "El teléfono debe tener 10 dígitos numéricos.";
        return;
    }

    // 🔴 VALIDACIÓN 3: Al menos un interés seleccionado
    if (intereses.length === 0) {
        mensaje.textContent = "Selecciona al menos un interés.";
        return;
    }

    // 🔴 VALIDACIÓN 4: Seleccionar horario
    if (!horario) {
        mensaje.textContent = "Selecciona un horario.";
        return;
    }

    // 🔴 VALIDACIÓN 5: Fecha no puede ser pasada
    const hoy = new Date().toISOString().split("T")[0];
    if (fecha < hoy) {
        mensaje.textContent = "La fecha no puede ser anterior a hoy.";
        return;
    }

    // 🔴 VALIDACIÓN 6: Archivo (opcional pero validar tamaño si existe)
    const archivo = document.getElementById("archivo").files[0];
    if (archivo && archivo.size > 2 * 1024 * 1024) {
        mensaje.textContent = "El archivo no debe superar los 2MB.";
        return;
    }

   // ✅ TODO CORRECTO
mensaje.style.color = "green";
mensaje.textContent = "Registro exitoso 🎉";

// Limpiar formulario
document.getElementById("formulario").reset();
});