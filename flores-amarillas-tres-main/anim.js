// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Amorcito", time: 4 },
  { text: "No me gusta html ni css dio", time: 8 },
  { text: "javascript lo paso mas o menos", time: 12 },
  { text: "Te amo mucho payeya siisisisi", time: 16 },
  { text: "Gueno y ahora??", time: 20 },
  { text: "Toco disfrutar de la cancion", time: 24 },
  { text: "LALALALALALALLALLA", time: 28 },
  { text: "BESITO", time: 32 },
  { text: "Tremendo tema no?", time: 40 },
  { text: "Te adoro amorcito", time: 44 },
  { text: "FLORES AMARILLAS AAHAHAHAH", time: 48 },
  { text: "En fin en un rato te envio sisiis", time: 52 },
  { text: "Te Amo!!!", time: 56 },
  { text: "Atentamente: Payeyo", time: 60 },


];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 20000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);