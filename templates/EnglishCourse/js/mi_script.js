var personalp = new Audio("sounds/your-sound.mp3");
personalp.src = "audio/PERSONALPRONUNS.mp3";

var i = new Audio("sounds/your-sound.mp3");
i.src = "audio/i.mp3";

var you = new Audio("sounds/your-sound.mp3");
you.src = "audio/you.mp3";

var he = new Audio("sounds/your-sound.mp3");
he.src = "audio/he.mp3";

var she = new Audio("sounds/your-sound.mp3");
she.src = "audio/she.mp3";

var it = new Audio("sounds/your-sound.mp3");
it.src = "audio/it.mp3";

var we = new Audio("sounds/your-sound.mp3");
we.src = "audio/we.mp3";

var they = new Audio("sounds/your-sound.mp3");
they.src = "audio/they.mp3";

var ejeone = new Audio("sounds/your-sound.mp3");
ejeone.src = "audio/eje/ejeone.mp3";

var ejetwo = new Audio("sounds/your-sound.mp3");
ejetwo.src = "audio/eje/ejetwo.mp3";


// Verificamos si el navegador soporta el Web Speech API
if ('speechSynthesis' in window) {
  var synth = window.speechSynthesis;
} else {
  alert("Tu navegador no es compatible con el API de Texto a Voz.");
}

function hablar() {
  var texto = document.getElementById('texto').value;
  if (texto !== '') {
      var utterance = new SpeechSynthesisUtterance(texto);
      synth.speak(utterance);
  }
}

function detener() {
  synth.cancel();
}

function resaltarPalabra(palabra) {
  var texto = document.getElementById('texto').value;
  var posicion = texto.indexOf(palabra);
  document.getElementById('texto').setSelectionRange(posicion, posicion + palabra.length);
}