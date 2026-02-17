const draggableElementsBox = document.querySelector(".draggable-elements");
const draggableElements = document.querySelectorAll(".draggable");
const droppableElements = document.querySelectorAll(".droppable");
const home = document.querySelector(".home");

const game1 = document.querySelector(".game-1");

const logoBox = document.querySelector(".logo-grande");
const btnBox = document.querySelector(".btn-box");
const bgJuego = document.querySelector(".bg-img");

const nombreSeñal1 = document.getElementById("nombreSeñal1");
const nombreSeñal2 = document.getElementById("nombreSeñal2");
const nombreSeñal3 = document.getElementById("nombreSeñal3");
const nombreSeñal4 = document.getElementById("nombreSeñal4");
const nombreSeñal5 = document.getElementById("nombreSeñal5");

const t1s1 = document.getElementById("t1s1");
const t1s2 = document.getElementById("t1s2");
const t1s3 = document.getElementById("t1s3");
const t1s4 = document.getElementById("t1s4");
const t1s5 = document.getElementById("t1s5");

let contadorAciertos = 0;

game1.style.display = "none";

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
      case "s1":
        t1s1.style.visibility = "visible";
        nombreSeñal1.style.display = "none";
        break;
      case "s2":
        t1s2.style.visibility = "visible";
        nombreSeñal2.style.display = "none";
        break;
      case "s3":
        t1s3.style.visibility = "visible";
        nombreSeñal3.style.display = "none";
        break;
      case "s4":
        t1s4.style.visibility = "visible";
        nombreSeñal4.style.display = "none";
        break;
      case "s5":
        t1s5.style.visibility = "visible";
        nombreSeñal5.style.display = "none";
        break;
      default:
        break;
    }

    contadorAciertos++;

    if (contadorAciertos === draggableElements.length) {
      setTimeout(() => {
        siguienteNivel();
      }, 2000);
    }
  } else {
    event.target.classList.remove("droppable-hover");
    switch (draggableElementData) {
      case "s1":
        abrirModal(
          error1.img,
          error1.titulo,
          error1.texto,
          error1.btnTexto,
          error1.btn
        );
        break;
      case "s2":
        abrirModal(
          error2.img,
          error2.titulo,
          error2.texto,
          error2.btnTexto,
          error2.btn
        );
        break;
      case "s3":
        abrirModal(
          error3.img,
          error3.titulo,
          error3.texto,
          error3.btnTexto,
          error3.btn
        );
        break;
      case "s4":
        abrirModal(
          error4.img,
          error4.titulo,
          error4.texto,
          error4.btnTexto,
          error4.btn
        );
        break;
      case "s5":
        abrirModal(
          error5.img,
          error5.titulo,
          error5.texto,
          error5.btnTexto,
          error5.btn
        );
        break;
      default:
        return abrirModal(
          error1.img,
          error1.titulo,
          error1.texto,
          error1.btnTexto,
          error1.btn
        );
    }
  }
}

//Navegacion

function siguienteNivel() {
  abrirModal(
    nuevoNivel1.img,
    nuevoNivel1.titulo,
    nuevoNivel1.texto,
    nuevoNivel1.btnTexto,
    nuevoNivel1.btn
  );
}

function iniciarJuego() {
  logoBox.style.animation = "logo-out ease 1.5s";
  btnBox.style.animation = "btn-out ease 1.5s";
  setTimeout(() => {
    home.style.display = "none";
  }, 300);
  setTimeout(() => {
    game1.style.display = "flex";
  }, 350);
  setTimeout(() => {
    draggableElementsBox.style.animation = "inicio-menu 0.5s ease";
    bgJuego.style.animation = "inicio-bg 0.8s ease-in";
  }, 400);
}
