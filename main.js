const passwordInput = document.getElementById("password");
const loginScreen = document.getElementById("login-screen");
const diary = document.getElementById("diary");
const entryContainer = document.getElementById("entry");
const extraMessage = document.getElementById("extra-message");
const navigationButtons = document.getElementById("navigation-buttons");
const revealButton = document.getElementById("reveal-button");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const finalOptions = document.getElementById("final-options");

const correctPassword = "1201";
let attempts = 0;
let currentIndex = 0;
let messageRevealed = false;

// Música
const music = document.getElementById("bg-music");
const musicToggle = document.getElementById("music-toggle");
let isPlaying = false;

musicToggle.addEventListener("click", () => {
  if (!isPlaying) {
    music.play();
    musicToggle.textContent = "⏸️";
    isPlaying = true;
  } else {
    music.pause();
    musicToggle.textContent = "🎵";
    isPlaying = false;
  }
});

// Fondos por carta
const backgrounds = [
  "backgrounds/enero.jpg",
  "backgrounds/febrero.jpg",
  "backgrounds/marzo.jpg",
  "backgrounds/abril.jpg",
  "backgrounds/mayo.jpg",
  "backgrounds/junio.jpg",
  "backgrounds/final.jpg"
];

function updateBackground(index) {
  document.body.classList.add("dynamic-bg");
  document.body.style.backgroundImage = `url('${backgrounds[index]}')`;
}

// Cartas
const entries = [
  {
    title: "📅 Enero – El Comienzo",
    text: `Mi amor bonito,
    
    A veces pienso en cómo empezó todo… y sonrío. Porque nunca lo planeamos. Comenzamos hablándonos por trabajo, allá por junio del año pasado. Tú me escribías para que te apoyara con tus informes mensuales, y yo con gusto te apoyaba. Era algo práctico, sin vueltas… hasta que llegó octubre. El 23 de octubre, para ser exacto.
    
    Ese día, entre mensajes y bromas, me hiciste una sobre el iPhone, y no sabes lo que marcó ese momento en mí. Fue como si, sin querer, se abriera una ventana diferente entre nosotros. Ya no hablábamos solo de trabajo. Empezamos a hablarnos con más confianza, con sonrisas entre líneas, con esa chispa que nadie más veía, pero que nosotros sentíamos crecer.
    
    En diciembre ya nos hablábamos con cariño, con ternura. Como si el corazón ya estuviera avisando lo que venía. Y entonces llegó esa noche inolvidable: aquella del 12 de enero.
    
    Ese día te vi por primera vez. Estábamos en el baile, con la música, las luces y los nervios latiendo más fuerte que nunca. Me acerqué a ti con el alma en la mano, y te pedí estar juntos. Te regalé una cadena con un corazoncito, pero lo que realmente te entregué fue mi decisión: la de elegirte, sin dudar.
    
    Te noté nerviosa… y eso me enterneció más. Yo también lo estaba, pero en ese instante todo tuvo sentido. Fue el inicio de algo que, desde entonces, no ha dejado de crecer.
    
    > “Desde que llegaste, las cosas simples comenzaron a sentirse mágicas.” ✨
`
  },
  {
    title: "📅 Febrero – Descubrirte",
    text: `Mi reina,
    
    Después de ese 12 de enero, todo empezó a sentirse más real, más nuestro. Ya no solo éramos dos personas que se escribían bonito… ahora estábamos empezando a vivir nuestra historia. Y febrero, con todo lo que representa el amor, fue como un escenario perfecto para seguir descubriéndote.
    
    ¿Sabes? Todavía me acuerdo de la emoción con la que te preparé esa página web especial por San Valentín. Quería darte algo diferente, algo que dijera "te quiero" sin necesidad de hablar. Lo hice pensando en lo que te gusta, en tu manera tranquila de sentir las cosas, y en cómo podía hacerte sonreír con un detalle sencillo pero hecho con el corazón.
    
    Y luego, en esos días de febrero, vino otro momento que guardo en mi memoria con ternura: cuando te entregué personalmente ese ramito tejido, con rosas y margaritas, y la tarjetita que te escribí. Fue nuestra segunda vez viéndonos… ya sin tantos nervios, con más tiempo para compartirnos aunque sea un poquito. Verte recibir ese detalle con dulzura me hizo sentir que iba por el camino correcto.
    
    Fue en ese mes donde supe que me estabas tocando de verdad. No era una ilusión… eras tú.
    
    > “Supe que me gustabas de verdad… cuando empecé a pensar más en ti que en mí.” 💌
`
  },
  {
    title: "📅 Marzo – Admirarte",
    text: `Mi vida,
    
    Este mes no solo seguí conociéndote a ti… sino también a tu mundo. Ese mundo que tiene una personita tan especial como lo es Xioma. Cuando me contaste de ella, cuando me hablaste como mamá, cuando vi tu dedicación y ternura al cuidarla, algo dentro de mí se acomodó diferente.
    
    Te volviste aún más admirable.
    
    Y cuando se acercó su cumpleaños y decidí enviarte ese detalle con cariño, no fue por compromiso, ni por quedar bien. Fue porque quería estar presente en algo que sé que es muy valioso para ti. Quería acompañarte en esa parte de tu vida, sin invadir, solo sumando, asi sea de a poquito.
    
    Ese mes aprendí a valorar no solo a la mujer que me gusta, sino también a la mamá que eres. Entendí que amar también es aprender a cuidar lo que la otra persona ama.
    
    > “La manera en que cuidas de Xioma me hizo admirarte aún más.” 🌼`
  },
  {
    title: "📅 Abril – Entenderte",
    text: `Amor,
    
    Abril fue un mes distinto. Más silencioso. Más introspectivo. Empezamos a sentir algunas diferencias… no graves, pero sí reales. Tus respuestas pausadas, tu forma tranquila de estar, me hacían dudar a veces. Pero también me enseñaron mucho.
    
    Aprendí que tú no necesitas mostrar el amor como lo hago yo para que sea verdadero. Tú lo haces a tu manera. Y eso… también es valioso.
    
    Empecé a dejar de buscar señales externas y comencé a mirar más profundo, a confiar más en que tu presencia, aunque callada, también es amor. Y con eso, fui cambiando yo también: menos impulsivo, más paciente, más atento a tu ritmo.
    
    Tú no me empujas… pero me invitas a ser mejor. Y eso es algo que no cualquiera logra.
    
    > “Tal vez no me lo dices como yo, pero sé que me quieres… a tu manera.” 🌙
`
  },
  {
    title: "📅 Mayo – Expresarme",
    text: `Mi reina,
    Este mes me animé a expresarme de una manera diferente. Te escribí una carta a mano (La primera que hacía para alguien)… y te la entregué pensando en que, aunque no siempre sepa cómo decirlo, mi amor por ti es constante.
    
    No lo hice para impresionarte, sino para que sintieras, sin presiones, lo que llevas causando en mí desde hace tiempo. Y ese detalle no quedó solo ahí… seguí enviándote mensajes diarios, canciones que hablaban por mí, imágenes con emoción, palabras que nacían del día a día, sin guión.
    
    También comencé a respetar más tus espacios. A entender que estar presente no es necesariamente hablar a cada rato, sino amar sin agobiar, dar sin esperar algo inmediato a cambio.
    
    Y tú, incluso en tus días más calladitos… seguías ahí. Y eso, para mí, es suficiente para seguir.`
  },
  {
    title: "📅 Junio – Abrazarte",
    text: `Mi María,
    Este mes fue mágico... Por fin te volví a ver. Después de tanto tiempo soñando con ese momento, al fin pudimos abrazarnos. Y no fue cualquier abrazo… fue ese que sana, que confirma, que sostiene.
    
    Te miré a los ojos, escuché tu voz cerquita, sentí tus manos… y todo dentro de mí se acomodó.
    
    Te juro que me llenó el alma.
    
    Ese reencuentro no solo fue físico… fue emocional. Me recordó por qué te elegí. Me reafirmó que lo que tenemos es real, que va más allá del tiempo, de los días buenos o difíciles. Me recordó que, aunque no siempre lo digamos todo, hay un amor firme sosteniéndonos.
    
    > “Después de todo, aún me emociono como el primer día… cuando me dices para vernos.” 💘
`
  },
  {
    title: "💌 Carta Final – Seis meses contigo",
    text: `Mi amor, María:
    Hoy ya no estamos celebrando un mes más…
    Hoy estamos celebrando medio año caminando juntos.
    Seis meses desde que decidimos apostar por esto.
    Seis meses de mensajes, emociones, distancias, reencuentros, detalles y aprendizajes.
    Y si cierro los ojos y miro hacia atrás… no hay un solo día en el que me arrepienta de haberte elegido.
    Este medio año ha sido como una especie de diario vivo:
    lleno de páginas inesperadas, de capítulos intensos, de silencios que también hablaron, y de palabras que escribí con el corazón, aún cuando tú no me las pedías.
    Desde aquel primer mensaje de trabajo, pasando por la broma del iPhone, hasta ese baile donde por fin nos vimos cara a cara…
    Todo ha ido tejiendo esta historia, la nuestra.
    Y si bien tú y yo tenemos formas distintas de amar, siento que hemos sabido construir algo hermoso.
    Tú con tu calma, yo con mi intensidad.
    Tú con tu ritmo, yo con mis ideas locas.
    Tú, que no necesitas decirlo todo para hacerlo sentir.
    Y yo, que a veces siento tanto que me desbordo sin querer.
    Pero aquí seguimos.
    Firmes. Presentes. Constantes.
    Porque amarte no es una carga, es una elección.
    Y te elijo con lo que eres, con lo que aún no has dicho, y con lo que solo tú sabes mostrar cuando sientes seguridad.
    Este diario no termina hoy…
    Solo acaba de empezar otro capítulo.
    Gracias por estos seis meses.
    Gracias por ser tú.
    Gracias por dejarme amarte.
    
    Con amor,
    Tu Jair`
  }
];


// Login
function checkPassword() {
  const enteredPassword = passwordInput.value.trim();
  if (enteredPassword === correctPassword) {
  loginScreen.classList.add("hidden");

  const intro = document.getElementById("intro");
  intro.classList.remove("hidden");
  intro.classList.add("show");

  setTimeout(() => {
    intro.classList.remove("show");
    intro.classList.add("hidden");
    diary.classList.remove("hidden");
    showEntry(currentIndex);
  }, 3000); // duración de intro (3 segundos)
} else {
    attempts++;
    const errorMsg = document.getElementById("error-msg");
    errorMsg.textContent =
      attempts >= 3
        ? "Ups… parece que no es la fecha que guardamos en el corazón 😅"
        : "Contraseña incorrecta. Inténtalo de nuevo.";
  }
}

// Mostrar carta
function showEntry(index) {
  entryContainer.classList.remove("show");

  setTimeout(() => {
    const entry = entries[index];
    entryContainer.innerHTML = `
      <h2>${entry.title}</h2>
      <p>${entry.text.replace(/\n/g, "<br>")}</p>
    `;
    entryContainer.scrollTop = 0;
    entryContainer.classList.add("show");

    updateBackground(index);

    // Botones
    prevBtn.disabled = index === 0;
    nextBtn.textContent =
      index === entries.length - 2 ? "Carta final 💌" : "Carta siguiente →";

    if (index === entries.length - 1) {
  navigationButtons.classList.add("hidden");
  finalOptions.classList.remove("hidden");
  entryContainer.classList.remove("hidden");
  extraMessage.classList.add("hidden");
  document.getElementById("gallery").classList.add("hidden");
} else {
  navigationButtons.classList.remove("hidden");
  finalOptions.classList.add("hidden");
  extraMessage.classList.add("hidden");
  document.getElementById("gallery").classList.add("hidden");
}

    if (!messageRevealed) {
      extraMessage.classList.add("hidden");
    }

  }, 200);
}

function nextEntry() {
  if (currentIndex < entries.length - 1) {
    currentIndex++;
    showEntry(currentIndex);
  }
}

function prevEntry() {
  if (currentIndex > 0) {
    currentIndex--;
    showEntry(currentIndex);
  }
}

function revealMessage() {
  entryContainer.classList.add("hidden");
  navigationButtons.classList.add("hidden");
  revealButton.classList.add("hidden");
  extraMessage.classList.remove("hidden");
  messageRevealed = true;
}

function resetDiary() {
  currentIndex = 0;
  extraMessage.classList.add("hidden");
  entryContainer.classList.remove("hidden");
  navigationButtons.classList.remove("hidden");
  showEntry(currentIndex);
}

function showMessage() {
  entryContainer.classList.add("hidden");
  document.getElementById("gallery").classList.add("hidden");
  finalOptions.classList.add("hidden");
  extraMessage.classList.remove("hidden");
  messageRevealed = true;
}

function showGallery() {
  entryContainer.classList.add("hidden");
  extraMessage.classList.add("hidden");
  finalOptions.classList.add("hidden");
  document.getElementById("gallery").classList.remove("hidden");
}

function backToFinalCard() {
  extraMessage.classList.add("hidden");
  document.getElementById("gallery").classList.add("hidden");
  entryContainer.classList.remove("hidden");
  finalOptions.classList.remove("hidden");
}

const canvas = document.getElementById("hearts-canvas");
const ctx = canvas.getContext("2d");

let width, height;
let hearts = [];

function resizeCanvas() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}

function createHeart() {
  return {
    x: Math.random() * width,
    y: height + 10,
    size: 10 + Math.random() * 10,
    speed: 1 + Math.random() * 2,
    opacity: 0.5 + Math.random() * 0.5
  };
}

function drawHeart(heart) {
  ctx.save();
  ctx.globalAlpha = heart.opacity;
  ctx.fillStyle = "#ff6b81"; // color del corazón
  ctx.beginPath();
  const x = heart.x;
  const y = heart.y;
  const s = heart.size / 2;
  ctx.moveTo(x, y);
  ctx.bezierCurveTo(x + s, y - s, x + 2 * s, y + s / 1.5, x, y + 2 * s);
  ctx.bezierCurveTo(x - 2 * s, y + s / 1.5, x - s, y - s, x, y);
  ctx.fill();
  ctx.restore();
}

function updateHearts() {
  ctx.clearRect(0, 0, width, height);
  hearts.forEach((heart) => {
    heart.y -= heart.speed;
    drawHeart(heart);
  });
  hearts = hearts.filter((h) => h.y + h.size > 0);

  if (hearts.length < 30) {
    hearts.push(createHeart());
  }

  requestAnimationFrame(updateHearts);
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
updateHearts();