// Verificamos si el navegador soporta el Web Speech API
if ('speechSynthesis' in window) {
  var synth = window.speechSynthesis;
} else {
  alert("Tu navegador no es compatible con el API de Texto a Voz.");
}

// Variables para controlar el resaltado de palabras
var palabras = [];
var palabraActual = 0;

function hablar() {
  var texto = document.getElementById('texto').value;
  if (texto !== '') {
      palabras = texto.split(' '); // Dividir el texto en palabras
      palabraActual = 0; // Reiniciar la variable para el resaltado
      resaltarPalabra(palabraActual); // Resaltar la primera palabra
      var utterance = new SpeechSynthesisUtterance(texto);
      utterance.onboundary = function (event) {
          // Obtener la palabra actual
          var palabra = event.target.text.substring(event.charIndex).split(' ')[0];
          resaltarPalabra(palabras.indexOf(palabra)); // Resaltar la palabra actual
      };
      utterance.onend = function () {
          // Eliminar el resaltado al finalizar la reproducción
          resaltarPalabra(-1);
      };
      synth.speak(utterance);
  }
}

function detener() {
  synth.cancel();
  resaltarPalabra(-1); // Eliminar el resaltado si se detiene la reproducción
}

function resaltarPalabra(palabraIndex) {
  var textoElemento = document.getElementById('texto');
  textoElemento.setSelectionRange(0, 0); // Reiniciar cualquier selección anterior

  if (palabraIndex >= 0 && palabraIndex < palabras.length) {
      var palabra = palabras[palabraIndex];
      var posicion = textoElemento.value.indexOf(palabra);
      if (posicion >= 0) {
          textoElemento.setSelectionRange(posicion, posicion + palabra.length);
      }
  }
}
