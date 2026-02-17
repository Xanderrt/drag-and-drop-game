const instBtn = document.querySelector(".instrucciones-btn");
const inicioBtn = document.getElementById("inicio");
const instBox = document.getElementById("instBox");

let imgInst = document.querySelector(".img-inst");
let tituloInst = document.querySelector(".titulo-inst");
let textoInst = document.querySelector(".texto-inst");
let izquierda = document.getElementById("izq");
let btnIzq = document.getElementById("btn-izq");
let derecha = document.getElementById("der");
let btnDer = document.getElementById("btn-der");

const modalBox = document.getElementById("modal-cont");

let btnModalBox = document.querySelector(".btn-modal-box");
let btnModal = document.getElementById("btn-modal");
let imgModal = document.getElementById("img-modal");
let tituloModal = document.getElementById("titulo-modal");
let textoModal = document.getElementById("texto-modal");

// OBJETOS

//Instrucciones
class Instruccion {
  constructor(img, titulo, texto, izq, der, iconl, iconr) {
    this.img = img;
    this.titulo = titulo;
    this.texto = texto;
    this.izq = izq;
    this.der = der;
    this.iconl = iconl;
    this.iconr = iconr;
  }
}

const inst1 = new Instruccion(
  "img/logo-camp.png",
  "Ruta Segura",
  "Le damos la bienvenida a esta actividad, en la cual aprenderá a identificar y ubicar diferentes tipos de señales y demarcaciones de seguridad. ¡Vamos!",
  "cerrarInstrucciones()",
  "avanzarInstruccion(inst2)",
  '<i class="fa-regular fa-circle-xmark"></i>',
  '<i class="fa-regular fa-circle-right"></i>'
);
const inst2 = new Instruccion(
  "img/inst-2.gif",
  "Encuentre y ubique",
  "Una vez inicie la actividad, en la parte izquierda de la pantalla encontrará un panel con diferentes tipos de señales, debe seleccionar cada una de ellas y ubicarlas en el lugar que les corresponde.",
  "retrocederInstruccion(inst1)",
  "avanzarInstruccion(inst3)",
  '<i class="fa-regular fa-circle-left"></i>',
  '<i class="fa-regular fa-circle-right"></i>'
);
const inst3 = new Instruccion(
  "img/inst-3.gif",
  "Sin temor al error",
  "Si la señal que seleccionó no logró ubicarla en el lugar correcto, recibirá una pista que le ayudará a encontrar el sitio adecuado.",
  "retrocederInstruccion(inst2)",
  "avanzarInstruccion(inst4)",
  '<i class="fa-regular fa-circle-left"></i>',
  '<i class="fa-regular fa-circle-right"></i>'
);
const inst4 = new Instruccion(
  "img/modal-right.png",
  "¿Todo listo?",
  "La actividad llegará a su final, una vez haya completado los 4 escenarios. Le deseamos buena suerte, mucha diversión y aprendizaje.",
  "retrocederInstruccion(inst3)",
  "cerrarInstrucciones()",
  '<i class="fa-regular fa-circle-left"></i>',
  '<i class="fa-regular fa-circle-xmark"></i>'
);

//Modales del juego
class Modal {
  constructor(img, titulo, texto, btnTexto, btn) {
    this.img = img;
    this.titulo = titulo;
    this.texto = texto;
    this.btnTexto = btnTexto;
    this.btn = btn;
  }
}

const error1 = new Modal(
  "img/modal-wrong.png",
  "Intente de nuevo",
  "La señal de “Salida de emergencia” debe ir ubicada en un lugar alto y de fácil visibilidad.",
  "Volver",
  "cerrarModal()"
);

const error2 = new Modal(
  "img/modal-wrong.png",
  "¿Esta seguro?",
  "Esta señal suele estar ubicada en el suelo, cerca de superficies húmedas.",
  "Volver",
  "cerrarModal()"
);

const error3 = new Modal(
  "img/modal-wrong.png",
  "Buen intento",
  "Esta señal debe estar ubicada en zonas sociales cerradas.",
  "Volver",
  "cerrarModal()"
);

const error4 = new Modal(
  "img/modal-wrong.png",
  "Recuerde:",
  "La ruta de evacuación debe ser identificable fácilmente.",
  "Volver",
  "cerrarModal()"
);

const error5 = new Modal(
  "img/modal-wrong.png",
  "Esta no va aquí",
  "Esta señal, ayuda a prevenir caídas y facilita la evacuación en caso de emergencia.",
  "Volver",
  "cerrarModal()"
);

const error6 = new Modal(
  "img/modal-wrong.png",
  "Esta no va aquí",
  "Esta señal debe estar ubicada en lugares donde el riesgo de caída de objetos sea muy elevado.",
  "Volver",
  "cerrarModal()"
);

const error7 = new Modal(
  "img/modal-wrong.png",
  "¡Aquí no es!",
  "Esta señal debe estar ubicada en un lugar visible y sin obstrucciones.",
  "Volver",
  "cerrarModal()"
);

const error8 = new Modal(
  "img/modal-wrong.png",
  "Cerca, pero no",
  "Esta señal permite demarcar una zona de riesgo para evitar accidentes.",
  "Volver",
  "cerrarModal()"
);

const error9 = new Modal(
  "img/modal-wrong.png",
  "Sigue intentandolo",
  "Esta señal debe ubicarse en el área donde se realizan trabajos de excavación, para advertir sobre el peligro de caídas o accidentes.",
  "Volver",
  "cerrarModal()"
);

const error10 = new Modal(
  "img/modal-wrong.png",
  "¿Seguro que va ahí?",
  "Esta señal debe ir ubicada en zonas a las que no debemos acceder, demarca el límite para evitar accidentes graves.",
  "Volver",
  "cerrarModal()"
);

const error11 = new Modal(
  "img/modal-wrong.png",
  "Lugar erroneo",
  "Esta señal se utiliza para demarcar la zona segura por la cual deben transitar los peatones en la vía pública.",
  "Volver",
  "cerrarModal()"
);

const error12 = new Modal(
  "img/modal-wrong.png",
  "Cerca, pero no",
  "Esta señal debe ir ubicada en un lugar despejado y amplio, donde varias personas puedan reunirse en caso de emergencia.",
  "Volver",
  "cerrarModal()"
);

const error13 = new Modal(
  "img/modal-wrong.png",
  "Esta no va aquí",
  "Esta señal complementa las demarcaciones de sendero peatonal y debe estar ubicada cerca a estas zonas.",
  "Volver",
  "cerrarModal()"
);

const error14 = new Modal(
  "img/modal-wrong.png",
  "Recuerde:",
  "Esta señal es utilizada en la calzada donde los conductores puedan verla con facilidad y aplicarla.",
  "Volver",
  "cerrarModal()"
);

const error15 = new Modal(
  "img/modal-wrong.png",
  "Cerca, pero no",
  "La función de esta señal es indicar al conductor que debe reducir su velocidad ya sea por un cruce de vías o paso peatonal.",
  "Volver",
  "cerrarModal()"
);

const error16 = new Modal(
  "img/modal-wrong.png",
  "Cerca, pero no",
  "Esta señal se utiliza para delimitar zonas de parqueo para personas con condiciones especiales y el piso es de diferente color.",
  "Volver",
  "cerrarModal()"
);

const error17 = new Modal(
  "img/modal-wrong.png",
  "Cerca, pero no",
  "Esta señal se utiliza para demarcar la zona de aislamiento en la que se encuentran vehículos averiados o se realizan reparaciones.",
  "Volver",
  "cerrarModal()"
);

const error18 = new Modal(
  "img/modal-wrong.png",
  "Cerca, pero no",
  "Esta señal debe estar ubicada en el asfalto antes de senderos peatonales para evitar accidentes por exceso de velocidad.",
  "Volver",
  "cerrarModal()"
);

const error19 = new Modal(
  "img/modal-wrong.png",
  "Cerca, pero no",
  "Encuentre una zona en la cuál no debería parquear por obstrucción del paso",
  "Volver",
  "cerrarModal()"
);

const error20 = new Modal(
  "img/modal-wrong.png",
  "Cerca, pero no",
  "Esta demarcación es una medida de seguridad que se utiliza para establecer límites en un espacio, previniendo el acercamiento o ingreso de los peatones y prevenir accidentes.",
  "Volver",
  "cerrarModal()"
);

const error21 = new Modal(
  "img/modal-wrong.png",
  "Cerca, pero no",
  "Esta señal de seguridad alerta sobre la presencia de objetos o sustancias que pueden incendiarse fácilmente.",
  "Volver",
  "cerrarModal()"
);

const error22 = new Modal(
  "img/modal-wrong.png",
  "Cerca, pero no",
  "Busque un botiquín o un kit de emergencias.",
  "Volver",
  "cerrarModal()"
);

const error23 = new Modal(
  "img/modal-wrong.png",
  "Cerca, pero no",
  " Ubique un equipo en movimiento que pueda generar accidentes por atrapamiento y ubique la señal nuevamente.",
  "Volver",
  "cerrarModal()"
);

const error24 = new Modal(
  "img/modal-wrong.png",
  "Cerca, pero no",
  "Busque el extintor más cercano.",
  "Volver",
  "cerrarModal()"
);

const error25 = new Modal(
  "img/modal-wrong.png",
  "Cerca, pero no",
  "Identifique las zonas dentro de la imagen en las que el acceso debe ser restringido para personal no autorizado y ubique la señal para evitar accidentes.",
  "Volver",
  "cerrarModal()"
);

const error26 = new Modal(
  "img/modal-wrong.png",
  "Cerca, pero no",
  "Esta señal debe ubicarse en un lugar visible para evitar el riesgo de padecer enfermedades respiratorias por el consumo en el trabajo y para evitar riesgo de incendios",
  "Volver",
  "cerrarModal()"
);

const error27 = new Modal(
  "img/modal-wrong.png",
  "Cerca, pero no",
  "Busque un lugar que requiera una separación entre una vía de transito y elementos o ambientes riesgosos de trabajo.",
  "Volver",
  "cerrarModal()"
);

const acierto = new Modal(
  "img/modal-right.png",
  "¡Excelente!",
  "La señal está correctamente ubicada ¡Muy Bien!.",
  "Continuar",
  "cerrarModal()"
);

const nuevoNivel1 = new Modal(
  "img/modal-right.png",
  "Escenario Completado",
  "¡Gran trabajo! vamos al siguiente escenario.",
  "Siguiente",
  "cambiarNivel(juego2.pagina)"
);

const nuevoNivel2 = new Modal(
  "img/modal-right.png",
  "Escenario Completado",
  "¡Excelente! el siguiente escenario nos espera.",
  "Siguiente",
  "cambiarNivel(juego3.pagina)"
);

const nuevoNivel3 = new Modal(
  "img/modal-right.png",
  "Escenario Completado",
  "¡Bien hecho! vamos una última vez.",
  "Siguiente",
  "cambiarNivel(juego4.pagina)"
);

const finalJuego = new Modal(
  "img/modal-right.png",
  "Fin del Juego",
  "¡Felicidades! ha llegado al final del juego con éxito, ahora es un experto identificando y ubicando las señales en las diferentes zonas de trabajo. ¡Recuerde hacer uso adecuado de la señalización y demarcación, esté buen hábito puede salvar su vida y la de los demás!.",
  "Finalizar",
  "volverInicio()"
);

//Tableros

class Juego {
  constructor(pagina) {
    this.pagina = pagina;
  }
}

const juego2 = new Juego("game2.html");
const juego3 = new Juego("game3.html");
const juego4 = new Juego("game4.html");

//funciones

function abrirInstrucciones(inst) {
  instBox.style.transform = "translateX(0)";
  instBox.style.opacity = "1";

  instBtn.disabled = "true";
  inicioBtn.disabled = "true";

  imgInst.innerHTML = `<img src=${inst.img} id="img-inst" />`;
  tituloInst.innerHTML = `<h2>${inst.titulo}</h2>`;
  textoInst.innerHTML = `<p>${inst.texto}</p>`;
  izquierda.innerHTML =
    `<button type="button" onclick = ${inst.izq}>` + inst.iconl + "</button>";
  derecha.innerHTML =
    `<button type="button" onclick = ${inst.der}>` + inst.iconr + "</button>";
}

function cerrarInstrucciones() {
  instBox.style.transform = "translateX(150rem)";
  instBox.style.opacity = "0";

  instBtn.removeAttribute("disabled");
  inicioBtn.removeAttribute("disabled");

  setTimeout(() => {
    instBox.style.transform = "translateX(-150rem)";
  }, 500);
}

function avanzarInstruccion(inst) {
  instBox.style.transform = "translateX(150rem)";
  instBox.style.opacity = "0";
  setTimeout(() => {
    instBox.style.transform = "translateX(-150rem)";
  }, 500);
  setTimeout(() => {
    imgInst.innerHTML = `<img src=${inst.img} id="img-inst" />`;
    tituloInst.innerHTML = `<h2>${inst.titulo}</h2>`;
    textoInst.innerHTML = `<p>${inst.texto}</p>`;
    izquierda.innerHTML =
      `<button type="button" onclick = ${inst.izq}>` + inst.iconl + "</button>";
    derecha.innerHTML =
      `<button type="button" onclick = ${inst.der}>` + inst.iconr + "</button>";
  }, 650);
  setTimeout(() => {
    instBox.style.transform = "translateX(0)";
    instBox.style.opacity = "1";
  }, 800);
}

function retrocederInstruccion(inst) {
  instBox.style.transform = "translateX(-150rem)";
  instBox.style.opacity = "0";
  setTimeout(() => {
    instBox.style.transform = "translateX(150rem)";
  }, 500);
  setTimeout(() => {
    imgInst.innerHTML = `<img src=${inst.img} id="img-inst" />`;
    tituloInst.innerHTML = `<h2>${inst.titulo}</h2>`;
    textoInst.innerHTML = `<p>${inst.texto}</p>`;
    izquierda.innerHTML =
      `<button type="button" onclick = ${inst.izq}>` + inst.iconl + "</button>";
    derecha.innerHTML =
      `<button type="button" onclick = ${inst.der}>` + inst.iconr + "</button>";
  }, 650);
  setTimeout(() => {
    instBox.style.transform = "translateX(0)";
    instBox.style.opacity = "1";
  }, 800);
}

function abrirModal(img, titulo, texto, btnTexto, btn) {
  imgModal.innerHTML = `<img src="${img}" alt="imagen del modal" />`;
  tituloModal.innerHTML = `<h2>${titulo}</h2>`;
  textoModal.innerHTML = `<p>${texto}</p>`;
  btnModalBox.innerHTML = `<input
            type="button"
            value="${btnTexto}"
            id="btn-modal"
            onclick="${btn}"
          />`;
  modalBox.style.transform = "scale(1)";
}

function cerrarModal() {
  modalBox.style.transform = "scale(0)";
}

function cambiarNivel(pagina) {
  cerrarModal();

  setTimeout(() => {
    bgJuego.style.transform = "scale(0)";
    draggableElementsBox.style.transform = "translateX(-100rem)";
  }, 300);

  setTimeout(() => {
    window.location.assign(`${pagina}`);
  }, 600);
}

function volverInicio() {
  cerrarModal();

  setTimeout(() => {
    bgJuego.style.transform = "scale(0)";
    draggableElementsBox.style.transform = "translateX(-100rem)";
  }, 300);

  setTimeout(() => {
    window.location.assign("../index.html");
  }, 600);
}
