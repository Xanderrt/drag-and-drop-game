---
inclusion: always
---

# Ruta Segura — ARL Bolívar

Juego educativo de drag & drop sobre señalización y demarcación de seguridad industrial. Desarrollado en HTML, CSS y JavaScript vanilla, sin frameworks ni dependencias de build.

---

## Estructura del proyecto

```
/
├── index.html          # Página única — contiene home, instrucciones, nivel 1 y nivel 2
├── css/
│   ├── root.css        # Variables CSS, reset, estilos base
│   ├── main.css        # Layout general, animaciones, responsive
│   ├── espacios1.css   # Posiciones grid del tablero 1 (e1–e5, t1s1–t1s5)
│   └── espacios2.css   # Posiciones grid del tablero 2 (e6–e10, t2s1–t2s5)
├── js/
│   ├── juego.js        # Motor unificado: niveles, drag & drop, navegación entre niveles
│   └── modales.js      # Datos (clases Modal e Instruccion), objetos de contenido, funciones UI
└── img/                # Assets: tableros, señales (s1–s10), íconos de modal, logos, GIFs
```

---

## Arquitectura y flujo

### Pantallas por página
Cada HTML tiene dos secciones `.pantalla`:
1. `.home` — pantalla de inicio con logo y botones "Instrucciones" / "Comenzar"
2. `.game-1` — pantalla del juego con panel de señales y tablero

La transición entre pantallas se hace con `display: none/flex` + animaciones CSS.

### Flujo de juego

```
index.html
  └─ iniciarJuego() → activa nivel 1 (#nivel1)
  └─ 5 aciertos → nuevoNivel modal → avanzarNivel() → activa nivel 2 (#nivel2)
  └─ 5 aciertos → finalJuego modal → volverInicio() → muestra home
```

El array `niveles` en `juego.js` define cada nivel: señales, tablero, errores y modal de fin. Para añadir un nivel basta con agregar la sección HTML y un objeto al array.

### Drag & Drop
- Elementos arrastrables: `<img class="draggable" draggable="true" id="sN">`
- Zonas de destino: `<div class="droppable" data-draggable-id="sN" id="eN">`
- Validación: compara `event.dataTransfer.getData("text")` con `data-draggable-id`
- Acierto: agrega clase `.dropped`, oculta el elemento original, muestra imagen del tablero (`tNsN`), incrementa `contadorAciertos`
- Error: abre modal con pista específica por señal

### Posicionamiento del tablero
El tablero usa CSS Grid de 80 columnas × 40 filas. Las posiciones de cada espacio y su imagen de confirmación se definen en `espacios1.css` / `espacios2.css` con `grid-area: fila-inicio / col-inicio / fila-fin / col-fin`.

---

## Clases JS principales

### `Modal(img, titulo, texto, btnTexto, btn)`
Objeto de datos para modales de feedback. `btn` es un string con la llamada a función (ej. `"cerrarModal()"`).

### `Instruccion(img, titulo, texto, izq, der, iconl, iconr)`
Objeto de datos para cada slide de instrucciones. `izq`/`der` son strings con llamadas a función para navegación.

### `Juego(pagina)`
Objeto simple que guarda la URL de cada nivel (ej. `"game2.html"`).

---

## Funciones clave (modales.js)

| Función | Descripción |
|---|---|
| `abrirInstrucciones(inst)` | Muestra el panel de instrucciones con el slide `inst` |
| `avanzarInstruccion(inst)` / `retrocederInstruccion(inst)` | Navega entre slides con animación |
| `cerrarInstrucciones()` | Oculta el panel y reactiva botones |
| `abrirModal(img, titulo, texto, btnTexto, btn)` | Muestra modal de feedback |
| `cerrarModal()` | Oculta el modal |
| `cambiarNivel(pagina)` | Anima salida y navega a la siguiente página |
| `volverInicio()` | Anima salida y navega a `index.html` |

---

## Variables CSS (root.css)

```css
--white: #fff
--gray: #d6d6d6       /* fondo general */
--black: #292929
--primario: #cecece   /* bordes, botones */
--secundario: #5e5e5e /* texto, acentos */
--terciario: #9e9e9e  /* texto secundario */
--transparent: rgba(0,0,0,0.3) /* sombras */
```

---

## Problemas conocidos y deuda técnica

1. **Código duplicado**: `main.js` y `juego2.js` son casi idénticos. La lógica de drag & drop podría unificarse en un módulo compartido parametrizado.
2. ~~**`iniciarJuego()` ausente en game2.html**~~ — corregido.
3. ~~**`abrirInstrucciones()` sin argumento en game2.html**~~ — corregido.
4. ~~**Imagen faltante** `logo-camp 1.png`~~ — corregido.
5. ~~**`instBox`, `instBtn`, `inicioBtn` no existen en game2.html**~~ — corregido, panel de instrucciones añadido.
6. **Juegos 3 y 4 no implementados**: Los objetos `juego3`, `juego4`, `nuevoNivel2`, `nuevoNivel3` y los modales `error11`–`error27` están definidos pero sin páginas correspondientes.
7. ~~**`console.log` de debug** en `juego2.js`~~ — corregido.
8. ~~**`lang="en"`** en ambos HTML~~ — corregido a `lang="es"`.
9. ~~**Transiciones CSS mal declaradas**~~ — corregido en `main.css`.

---

## Convenciones del proyecto

- Señales del juego 1: `s1`–`s5`, espacios: `e1`–`e5`, imágenes tablero: `t1s1`–`t1s5`
- Señales del juego 2: `s6`–`s10`, espacios: `e6`–`e10`, imágenes tablero: `t2s1`–`t2s5`
- Cada nuevo juego necesita: HTML propio, JS propio, CSS de espacios propio, imágenes de señales y tablero
- Los modales de error se nombran `errorN` donde N coincide con el número de la señal
