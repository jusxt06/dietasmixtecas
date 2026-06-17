const filtro = document.getElementById('filtroNutriente');
const filas = document.querySelectorAll('#tablaNutricion tr');

filtro.addEventListener('change', () => {
  const valor = filtro.value;
  filas.forEach(fila => {
    const nutrientes = fila.dataset.nutriente || '';
    fila.classList.toggle('hidden', valor !== 'todos' && !nutrientes.includes(valor));
  });
});

const form = document.getElementById('contactForm');
const msg = document.getElementById('mensajeExito');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  if (!nombre || !email || !mensaje) {
    msg.style.display = 'block';
    msg.style.background = '#fde8e8';
    msg.style.color = '#8a1f1f';
    msg.textContent = 'Completa todos los campos para enviar el mensaje.';
    return;
  }

  msg.style.display = 'block';
  msg.style.background = '#edf5ef';
  msg.style.color = 'var(--verde-oscuro)';
  msg.textContent = 'Mensaje enviado correctamente.';
  form.reset();
});

const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});