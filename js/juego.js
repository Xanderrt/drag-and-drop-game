// ─── Selectores globales ───────────────────────────────────────────────────
const home    = document.querySelector(".home");
const logoBox = document.querySelector(".logo-grande");
const btnBox  = document.querySelector(".btn-box");

// ─── Configuración de niveles ──────────────────────────────────────────────
const niveles = [
  {
    seccionId: "nivel1",
    señales: ["s1", "s2", "s3", "s4", "s5"],
    tableroIds: { s1: "t1s1", s2: "t1s2", s3: "t1s3", s4: "t1s4", s5: "t1s5" },
    nombreIds:  { s1: "nombreSeñal1", s2: "nombreSeñal2", s3: "nombreSeñal3", s4: "nombreSeñal4", s5: "nombreSeñal5" },
    errores:    { s1: error1, s2: error2, s3: error3, s4: error4, s5: error5 },
    modalFin:   () => abrirModal(nuevoNivel.img, nuevoNivel.titulo, nuevoNivel.texto, nuevoNivel.btnTexto, nuevoNivel.btn),
  },
  {
    seccionId: "nivel2",
    señales: ["s6", "s7", "s8", "s9", "s10"],
    tableroIds: { s6: "t2s1", s7: "t2s2", s8: "t2s3", s9: "t2s4", s10: "t2s5" },
    nombreIds:  { s6: "nombreSeñal6", s7: "nombreSeñal7", s8: "nombreSeñal8", s9: "nombreSeñal9", s10: "nombreSeñal10" },
    errores:    { s6: error6, s7: error7, s8: error8, s9: error9, s10: error10 },
    modalFin:   () => abrirModal(finalJuego.img, finalJuego.titulo, finalJuego.texto, finalJuego.btnTexto, finalJuego.btn),
  },
];

// ─── Estado ────────────────────────────────────────────────────────────────
let nivelActual = 0;
let contadorAciertos = 0;

// ─── Inicialización ────────────────────────────────────────────────────────
// Ocultar todos los niveles al cargar — solo el home es visible
niveles.forEach(n => {
  document.getElementById(n.seccionId).style.display = "none";
});

function _activarNivel(idx) {
  const nivel   = niveles[idx];
  const seccion = document.getElementById(nivel.seccionId);
  const tablero = seccion.querySelector(".tablero");

  seccion.style.display = "flex";

  // Reiniciar animación de entrada del tablero
  tablero.style.opacity    = "";
  tablero.style.scale      = "";
  tablero.style.transition = "";
  tablero.style.animation  = "none";
  void tablero.offsetWidth;
  tablero.style.animation  = "";

  // Registrar eventos drag & drop solo sobre los elementos de este nivel
  seccion.querySelectorAll(".draggable").forEach(el =>
    el.addEventListener("dragstart", dragStart)
  );
  seccion.querySelectorAll(".droppable").forEach(el => {
    el.addEventListener("dragenter", dragEnter);
    el.addEventListener("dragover",  dragOver);
    el.addEventListener("dragleave", dragLeave);
    el.addEventListener("drop",      drop);
  });
}

// ─── Drag & Drop ───────────────────────────────────────────────────────────
function dragStart(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function dragEnter(event) {
  event.target.classList.add("droppable-hover");
}

function dragOver(event) {
  event.preventDefault();
}

function dragLeave(event) {
  event.target.classList.remove("droppable-hover");
}

function drop(event) {
  event.preventDefault();
  const nivel      = niveles[nivelActual];
  const draggableId = event.dataTransfer.getData("text");
  const droppableId = event.target.getAttribute("data-draggable-id");

  if (draggableId === droppableId) {
    event.target.classList.add("dropped");
    event.target.classList.remove("droppable-hover");

    const draggable = document.getElementById(draggableId);
    draggable.classList.add("dragged");
    draggable.setAttribute("draggable", "false");

    event.target.insertAdjacentHTML(
      "afterbegin",
      `<img src="img/${draggableId}.png" alt="${draggableId}" class="${draggableId} draggable invisible" />`
    );

    const tableroEl = document.getElementById(nivel.tableroIds[draggableId]);
    if (tableroEl) tableroEl.style.visibility = "visible";

    const nombreEl = document.getElementById(nivel.nombreIds[draggableId]);
    if (nombreEl) nombreEl.style.display = "none";

    abrirModal(acierto.img, acierto.titulo, acierto.texto, acierto.btnTexto, acierto.btn);

    contadorAciertos++;
    if (contadorAciertos === nivel.señales.length) {
      setTimeout(() => nivel.modalFin(), 2000);
    }

  } else {
    event.target.classList.remove("droppable-hover");
    const modal = nivel.errores[draggableId] || nivel.errores[nivel.señales[0]];
    abrirModal(modal.img, modal.titulo, modal.texto, modal.btnTexto, modal.btn);
  }
}

// ─── Navegación ────────────────────────────────────────────────────────────
function iniciarJuego() {
  logoBox.style.animation = "logo-out ease 1.5s";
  btnBox.style.animation  = "btn-out ease 1.5s";
  setTimeout(() => { home.style.display = "none"; }, 300);
  setTimeout(() => { _activarNivel(0); }, 350);
}

function avanzarNivel() {
  const seccionActual = document.getElementById(niveles[nivelActual].seccionId);
  const tablero       = seccionActual.querySelector(".tablero");

  tablero.style.transition = "opacity 0.3s ease, scale 0.3s ease";
  tablero.style.opacity    = "0";
  tablero.style.scale      = "0.92";

  setTimeout(() => {
    seccionActual.style.display = "none";
    nivelActual++;
    contadorAciertos = 0;
    _activarNivel(nivelActual);
  }, 350);
}

function volverInicio() {
  const seccionActual = document.getElementById(niveles[nivelActual].seccionId);
  const tablero       = seccionActual.querySelector(".tablero");

  // Salida del tablero
  tablero.style.transition = "opacity 0.3s ease, scale 0.3s ease";
  tablero.style.opacity    = "0";
  tablero.style.scale      = "0.92";

  setTimeout(() => {
    seccionActual.style.display = "none";
    nivelActual      = 0;
    contadorAciertos = 0;

    // Restaurar home con animaciones de entrada
    home.style.display = "flex";
    logoBox.style.animation = "inicio-logo ease 1.5s";
    btnBox.style.animation  = "inicio-btn ease 1.5s";
  }, 350);
}
