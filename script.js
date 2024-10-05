// Seleccionamos el botón y el pop-up
const openPopup = document.getElementById('openPopup');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

// Función para mostrar el pop-up
openPopup.addEventListener('click', () => {
  popup.classList.add('show');
});

// Función para ocultar el pop-up
closePopup.addEventListener('click', () => {
  popup.classList.remove('show');
});