const draggableElementsBox = document.querySelector(".draggable-elements");
const draggableElements = document.querySelectorAll(".draggable");
const droppableElements = document.querySelectorAll(".droppable");
const home = document.querySelector(".home");

const game1 = document.querySelector(".game-1");

const bgJuego = document.querySelector(".bg-img");

const nombreSeñal1 = document.getElementById("nombreSeñal1");
const nombreSeñal2 = document.getElementById("nombreSeñal2");
const nombreSeñal3 = document.getElementById("nombreSeñal3");
const nombreSeñal4 = document.getElementById("nombreSeñal4");
const nombreSeñal5 = document.getElementById("nombreSeñal5");

const t2s1 = document.getElementById("t2s1");
const t2s2 = document.getElementById("t2s2");
const t2s3 = document.getElementById("t2s3");
const t2s4 = document.getElementById("t2s4");
const t2s5 = document.getElementById("t2s5");

let contadorAciertos = 0;

home.style.display = "none";

//Eventos de arrastre
draggableElements.forEach((e) => {
  e.addEventListener("dragstart", dragStart);
});

droppableElements.forEach((e) => {
  e.addEventListener("dragenter", dragEnter);
  e.addEventListener("dragover", dragOver);
  e.addEventListener("dragleave", dragLeave);
  e.addEventListener("drop", drop);
});

//Drag and Drop Functions
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
  const draggableElementData = event.dataTransfer.getData("text");
  const droppableElementData = event.target.getAttribute("data-draggable-id");

  if (draggableElementData === droppableElementData) {
    console.log(draggableElementData);
    event.target.classList.add("dropped");
    event.target.classList.remove("droppable-hover");
    const draggableElement = document.getElementById(draggableElementData);
    draggableElement.classList.add("dragged");
    draggableElement.setAttribute("draggable", "false");

    abrirModal(
      acierto.img,
      acierto.titulo,
      acierto.texto,
      acierto.btnTexto,
      acierto.btn
    );

    event.target.insertAdjacentHTML(
      "afterbegin",
      `<img src="/img/${draggableElementData}.png" alt="señal5" class="${draggableElementData} draggable invisible"/>`
    );

    switch (draggableElementData) {
      case "s6":
        t2s1.style.visibility = "visible";
        nombreSeñal1.style.display = "none";
        break;
      case "s7":
        t2s2.style.visibility = "visible";
        nombreSeñal2.style.display = "none";
        break;
      case "s8":
        t2s3.style.visibility = "visible";
        nombreSeñal3.style.display = "none";
        break;
      case "s9":
        t2s4.style.visibility = "visible";
        nombreSeñal4.style.display = "none";
        break;
      case "s10":
        t2s5.style.visibility = "visible";
        nombreSeñal5.style.display = "none";
        break;
      default:
        break;
    }

    contadorAciertos++;
    console.log(contadorAciertos);
    console.log(draggableElementData);

    if (contadorAciertos === draggableElements.length) {
      setTimeout(() => {
        siguienteNivel();
      }, 2000);
    }
  } else {
    event.target.classList.remove("droppable-hover");
    switch (draggableElementData) {
      case "s6":
        abrirModal(
          error6.img,
          error6.titulo,
          error6.texto,
          error6.btnTexto,
          error6.btn
        );
        break;
      case "s7":
        abrirModal(
          error7.img,
          error7.titulo,
          error7.texto,
          error7.btnTexto,
          error7.btn
        );
        break;
      case "s8":
        abrirModal(
          error8.img,
          error8.titulo,
          error8.texto,
          error8.btnTexto,
          error8.btn
        );
        break;
      case "s9":
        abrirModal(
          error9.img,
          error9.titulo,
          error9.texto,
          error9.btnTexto,
          error9.btn
        );
        break;
      case "s10":
        abrirModal(
          error10.img,
          error10.titulo,
          error10.texto,
          error10.btnTexto,
          error10.btn
        );
        break;
      default:
        return abrirModal(
          error6.img,
          error6.titulo,
          error6.texto,
          error6.btnTexto,
          error6.btn
        );
    }
  }
}

function siguienteNivel() {
  abrirModal(
    finalJuego.img,
    finalJuego.titulo,
    finalJuego.texto,
    finalJuego.btnTexto,
    finalJuego.btn
  );
}
