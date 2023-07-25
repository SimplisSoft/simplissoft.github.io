// Obtener el botón de enviar
const enviarBtn = document.querySelector('.btn-neon');

// Agregar un evento de clic al botón
enviarBtn.addEventListener('click', function(e) {
  e.preventDefault(); // Evitar el envío del formulario

  // Abrir la ventana emergente con el contenido del formulario
  window.open('', 'Popup', 'width=600,height=400');

  // Obtener el formulario y su contenido HTML
  const formularioHTML = document.getElementById('formulario').outerHTML;

  // Escribir el contenido del formulario en la ventana emergente
  window.document.write(formularioHTML);
});
