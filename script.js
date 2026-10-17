'use strict';

// Ejercicio educativo: valida campos vacíos, no realiza autenticación real.
const formulario = document.querySelector('#login-form');
const usuario = document.querySelector('#usuario');
const contrasena = document.querySelector('#contrasena');
const mensaje = document.querySelector('#mensaje');

function marcarError(entrada, texto) {
  const salida = document.querySelector(`#${entrada.id}-error`);
  salida.textContent = texto;
  entrada.setAttribute('aria-invalid', texto ? 'true' : 'false');
}

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  const nombre = usuario.value.trim();
  const clave = contrasena.value; // Una contraseña puede contener espacios válidos.
  marcarError(usuario, nombre ? '' : 'Debes escribir tu usuario.');
  marcarError(contrasena, clave ? '' : 'Debes escribir una contraseña.');
  if (!nombre || !clave) {
    mensaje.textContent = '';
    (!nombre ? usuario : contrasena).focus();
    return;
  }
  mensaje.textContent = `¡Campos completos, ${nombre}! Esta es solo una demostración.`;
  contrasena.value = '';
});

[usuario, contrasena].forEach((entrada) => {
  entrada.addEventListener('input', () => {
    marcarError(entrada, '');
    mensaje.textContent = '';
  });
});
