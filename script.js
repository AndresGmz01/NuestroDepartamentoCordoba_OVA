function responderVideo(respuesta) {
    const resultado = document.getElementById("resultado-video");
    if (respuesta === "Montería") {
        resultado.textContent = "¡Muy bien! 🎉 Montería es la capital de Córdoba.";
        resultado.className = "mensaje exito";
    } else {
        resultado.textContent = "¡Sigue intentando! Recuerda que la capital de Córdoba es Montería.";
        resultado.className = "mensaje error";
    }
}

/* ===== MUNICIPIOS DESTACADOS ===== */
const destacados = [
    { n: "Montería", e: "🏙️", z: "Capital · Sinú medio", d: [
        "Fue fundada en 1777 por Antonio de la Torre y Miranda.",
        "Se le conoce como «La Perla del Sinú».",
        "El río Sinú la atraviesa y a sus orillas está el paseo Ronda del Sinú." ] },
    { n: "Lorica", e: "🛶", z: "Bajo Sinú", d: [
        "Está junto al río Sinú, rodeada de ciénagas.",
        "Su mercado público cubierto es un edificio muy famoso.",
        "Es conocida por su Semana Santa y sus artesanías." ] },
    { n: "Tuchín", e: "👒", z: "Resguardo zenú", d: [
        "Es tierra del pueblo indígena zenú.",
        "Sus artesanos tejen el sombrero vueltiao con caña flecha.",
        "Las trenzas blancas y negras forman dibujos con significado." ] },
    { n: "San Pelayo", e: "🎺", z: "Sinú medio", d: [
        "Cada junio recibe el Festival Nacional del Porro.",
        "Allí se reúnen bandas de viento y bailadores de todo el país.",
        "El porro es uno de los ritmos más queridos del Caribe." ] },
    { n: "Tierralta", e: "🌳", z: "Alto Sinú", d: [
        "Allí está el embalse de Urrá, sobre el río Sinú.",
        "Cerca queda el Parque Nacional Natural Paramillo.",
        "En su territorio viven comunidades indígenas emberá katío." ] },
    { n: "Montelíbano", e: "⛏️", z: "San Jorge", d: [
        "Allí funciona la mina de níquel Cerro Matoso.",
        "El níquel se usa para fabricar acero inoxidable.",
        "Es uno de los municipios mineros más importantes del país." ] },
    { n: "San Antero", e: "🌿", z: "Costanera", d: [
        "Está cerca de la bahía de Cispatá, donde desemboca el Sinú.",
        "Sus manglares son hogar de peces, aves y cangrejos.",
        "Es un destino de playa y ecoturismo." ] },
    { n: "Moñitos", e: "🏖️", z: "Costanera", d: [
        "Tiene playas sobre el mar Caribe.",
        "La pesca y el turismo son importantes para su gente.",
        "Es una buena parada para disfrutar del mar cordobés." ] },
    { n: "Ayapel", e: "🐟", z: "San Jorge", d: [
        "Allí está la ciénaga de Ayapel, una de las más grandes de la región.",
        "La pesca es una de las actividades de sus habitantes.",
        "Sus humedales son refugio de muchas aves." ] }
];

const todosLosMunicipios = [
    "Ayapel", "Buenavista", "Canalete", "Cereté", "Chimá", "Chinú",
    "Ciénaga de Oro", "Cotorra", "La Apartada", "Lorica", "Los Córdobas",
    "Momil", "Montelíbano", "Montería", "Moñitos", "Planeta Rica",
    "Pueblo Nuevo", "Puerto Escondido", "Puerto Libertador", "Purísima",
    "Sahagún", "San Andrés de Sotavento", "San Antero",
    "San Bernardo del Viento", "San Carlos", "San José de Uré",
    "San Pelayo", "Tierralta", "Tuchín", "Valencia"
];

const listaMunicipios = document.getElementById("lista-municipios");
const ficha = document.getElementById("ficha");

function mostrarFicha(indice) {
    const m = destacados[indice];
    listaMunicipios.querySelectorAll("button").forEach((b, i) =>
        b.setAttribute("aria-selected", i === indice));
    ficha.replaceChildren();

    const emoji = document.createElement("div");
    emoji.className = "emoji";
    emoji.textContent = m.e;

    const info = document.createElement("div");
    const titulo = document.createElement("h3");
    titulo.textContent = m.n;
    const zona = document.createElement("span");
    zona.className = "zona";
    zona.textContent = m.z;
    const lista = document.createElement("ul");
    m.d.forEach(dato => {
        const li = document.createElement("li");
        li.textContent = dato;
        lista.appendChild(li);
    });

    info.append(titulo, zona, lista);
    ficha.append(emoji, info);
}

destacados.forEach((m, i) => {
    const b = document.createElement("button");
    b.className = "chip";
    b.setAttribute("role", "tab");
    b.textContent = `${m.e} ${m.n}`;
    b.addEventListener("click", () => mostrarFicha(i));
    listaMunicipios.appendChild(b);
});
mostrarFicha(0);

const contenedorTodos = document.getElementById("todos");
todosLosMunicipios.forEach(nombre => {
    const s = document.createElement("span");
    s.textContent = nombre;
    contenedorTodos.appendChild(s);
});

/* ===== PREGUNTAS DEL JUEGO ===== */
const preguntas = [
    { pregunta: "¿Cuál es la capital del departamento de Córdoba?",
      opciones: ["Lorica", "Montería", "Sahagún"], correcta: 1,
      explicacion: "Montería es la capital de Córdoba y está a orillas del río Sinú." },
    { pregunta: "¿Cuántos municipios tiene el departamento de Córdoba?",
      opciones: ["15 municipios", "25 municipios", "30 municipios"], correcta: 2,
      explicacion: "¡Así es! Córdoba está conformado por 30 municipios." },
    { pregunta: "¿Qué río pasa por la ciudad de Montería?",
      opciones: ["Río Sinú", "Río Magdalena", "Río Amazonas"], correcta: 0,
      explicacion: "El río Sinú atraviesa Montería y es muy importante para la región." },
    { pregunta: "¿Cuál de estos municipios pertenece a Córdoba?",
      opciones: ["Medellín", "Cereté", "Cali"], correcta: 1,
      explicacion: "Cereté es uno de los municipios del departamento de Córdoba." },
    { pregunta: "¿Qué municipio es reconocido por la elaboración del sombrero vueltiao?",
      opciones: ["Tuchín", "Ayapel", "Canalete"], correcta: 0,
      explicacion: "Tuchín, tierra zenú, es reconocido por el sombrero vueltiao." },
    { pregunta: "¿Con qué material se teje el sombrero vueltiao?",
      opciones: ["Paja de trigo", "Caña flecha", "Hoja de coco"], correcta: 1,
      explicacion: "Se teje con caña flecha, en trenzas blancas y negras." },
    { pregunta: "¿Qué pueblo indígena creó el sombrero vueltiao?",
      opciones: ["Zenú", "Wayuu", "Arhuaco"], correcta: 0,
      explicacion: "El pueblo zenú creó el sombrero vueltiao hace muchos años." },
    { pregunta: "¿En qué municipio se celebra el Festival Nacional del Porro?",
      opciones: ["Moñitos", "San Pelayo", "Tierralta"], correcta: 1,
      explicacion: "El festival se celebra en San Pelayo cada mes de junio." },
    { pregunta: "¿Dónde nace el río Sinú?",
      opciones: ["En el Nudo de Paramillo", "En la Sierra Nevada", "En el mar Caribe"], correcta: 0,
      explicacion: "Nace en el Nudo de Paramillo y desemboca en la bahía de Cispatá." },
    { pregunta: "¿Qué municipio tiene la mina de níquel Cerro Matoso?",
      opciones: ["Montelíbano", "Lorica", "San Antero"], correcta: 0,
      explicacion: "Cerro Matoso queda en Montelíbano y produce níquel." }
];

/* ===== VARIABLES DEL JUEGO ===== */
let preguntaActual = 0;
let puntos = 0;
let respondida = false;

const elementoProgreso = document.getElementById("progreso");
const elementoPuntos = document.getElementById("puntos");
const elementoBarra = document.getElementById("barra");
const elementoPregunta = document.getElementById("pregunta");
const elementoOpciones = document.getElementById("opciones-juego");
const elementoRetroalimentacion = document.getElementById("retroalimentacion");
const botonSiguiente = document.getElementById("siguiente");
const elementoFinal = document.getElementById("final-juego");
const elementoResumen = document.getElementById("resumen-final");
const elementoEstrellas = document.getElementById("estrellas");
const botonReiniciar = document.getElementById("reiniciar");

function mostrarPregunta() {
    respondida = false;
    const pregunta = preguntas[preguntaActual];

    elementoProgreso.textContent = `Pregunta ${preguntaActual + 1} de ${preguntas.length}`;
    elementoPuntos.textContent = puntos;
    elementoBarra.style.width = `${(preguntaActual / preguntas.length) * 100}%`;
    elementoPregunta.textContent = pregunta.pregunta;
    elementoOpciones.replaceChildren();
    elementoRetroalimentacion.textContent = "";
    elementoRetroalimentacion.className = "mensaje";

    botonSiguiente.hidden = true;
    elementoFinal.hidden = true;
    elementoPregunta.hidden = false;
    elementoOpciones.hidden = false;
    elementoRetroalimentacion.hidden = false;

    pregunta.opciones.forEach((opcion, indice) => {
        const boton = document.createElement("button");
        boton.className = "opcion";
        boton.textContent = `${String.fromCharCode(65 + indice)}. ${opcion}`;
        boton.addEventListener("click", () => comprobarRespuesta(indice, boton));
        elementoOpciones.appendChild(boton);
    });
}

function comprobarRespuesta(indice, botonElegido) {
    if (respondida) return;
    respondida = true;

    const pregunta = preguntas[preguntaActual];
    elementoOpciones.querySelectorAll("button").forEach((boton, i) => {
        boton.disabled = true;
        if (i === pregunta.correcta) boton.classList.add("correcta");
    });

    if (indice === pregunta.correcta) {
        puntos += 10;
        elementoRetroalimentacion.textContent = `¡Excelente! ⭐ ${pregunta.explicacion}`;
        elementoRetroalimentacion.className = "mensaje exito";
    } else {
        botonElegido.classList.add("incorrecta");
        elementoRetroalimentacion.textContent = `¡Buen intento! 💡 ${pregunta.explicacion}`;
        elementoRetroalimentacion.className = "mensaje error";
    }

    elementoPuntos.textContent = puntos;
    elementoBarra.style.width = `${((preguntaActual + 1) / preguntas.length) * 100}%`;
    botonSiguiente.textContent = preguntaActual === preguntas.length - 1
        ? "Ver mis resultados 🏆" : "Siguiente pregunta ➜";
    botonSiguiente.hidden = false;
}

function siguientePregunta() {
    if (!respondida) return;
    preguntaActual++;
    if (preguntaActual < preguntas.length) mostrarPregunta();
    else mostrarResultados();
}

function mostrarResultados() {
    elementoProgreso.textContent = "¡Reto terminado!";
    elementoBarra.style.width = "100%";
    elementoPregunta.hidden = true;
    elementoOpciones.hidden = true;
    elementoRetroalimentacion.hidden = true;
    botonSiguiente.hidden = true;
    elementoFinal.hidden = false;

    const aciertos = puntos / 10;
    const total = preguntas.length;
    const estrellas = aciertos === total ? 3 : aciertos >= total * 0.6 ? 2 : 1;
    elementoEstrellas.textContent = "⭐".repeat(estrellas) + "☆".repeat(3 - estrellas);

    let mensaje;
    if (aciertos === total) mensaje = "¡Increíble! Eres un gran explorador de Córdoba. 🏆";
    else if (aciertos >= total * 0.6) mensaje = "¡Muy buen trabajo! Sigue aprendiendo sobre nuestro departamento. 🌟";
    else mensaje = "¡Gracias por participar! Repasa las lecciones e inténtalo otra vez. 💚";

    elementoResumen.textContent =
        `Obtuviste ${puntos} de ${total * 10} puntos, con ${aciertos} respuestas correctas de ${total}. ` + mensaje;
}

function reiniciarJuego() {
    preguntaActual = 0;
    puntos = 0;
    respondida = false;
    mostrarPregunta();
}

botonSiguiente.addEventListener("click", siguientePregunta);
botonReiniciar.addEventListener("click", reiniciarJuego);
mostrarPregunta();
