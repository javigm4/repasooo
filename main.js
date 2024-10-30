import './style.css'
const body = document.querySelector("body");

//----TITULO---
const titulo = document.createElement("h2");
titulo.textContent = "¿Qué banda lleva...?";

//----PREGUNTAS----
const mockData = [{
    hermandad: "JESÚS EN SU SOBERANO PODER ANTE CAIFÁS",
    opciones: [
        "LAS CIGARRERAS",
        "ROSARIO DE ARRIATE",
        "PRESENTACIÓN AL PUEBLO DE DOS HERMANAS"
    ],
    correcta: "LAS CIGARRERAS",
}];

const pPregunta = document.createElement("p");
pPregunta.textContent = mockData[0].hermandad;

//----FORMULARIO----
const divFormulario = document.createElement("div");

// Función para crear un li con un botón
const createLi = (button) => {
    const li = document.createElement("li");
    li.appendChild(button);
    return li;
}

//----CREAR BOTONES---
let respuestaSeleccionada;

mockData[0].opciones.forEach(opcion => {
    const pRespuesta = document.createElement("button");
    pRespuesta.textContent = opcion;
    divFormulario.appendChild(createLi(pRespuesta)); // Cambiado aquí

    pRespuesta.addEventListener("click", () => {
        // Si hay un botón seleccionado previamente, quitarle la clase "selected"
        const botonPrevio = divFormulario.querySelector(".selected");
        if (botonPrevio) {
            botonPrevio.classList.remove("selected");
        }

        // Marcar el nuevo botón como seleccionado
        respuestaSeleccionada = opcion;
        pRespuesta.classList.add("selected");
        console.log(opcion);
    });
});

//---CALCULADORA---
const inputExpresion = document.createElement("input");
inputExpresion.type = "text";
inputExpresion.id = "expresionID";
inputExpresion.placeholder = "Escribe la expresion";
divFormulario.appendChild(inputExpresion);

const pERROR = document.createElement("p");
pERROR.textContent = "";
pERROR.classList.add("pERROR");
divFormulario.appendChild(pERROR);

//----FOOTER----
const footer = document.createElement("footer");
const footerBtn = document.createElement("button");
footer.appendChild(footerBtn);
footerBtn.textContent = "check";
footerBtn.classList.add("check");
divFormulario.appendChild(footer);

//----AGREGAR ELEMENTOS AL BODY---
body.appendChild(titulo);
body.appendChild(pPregunta);
body.appendChild(divFormulario);

////////----FUNCIONALIDADES----//////////

let total = 0;

//----COMPROBAR CHECK Y CALCULAR LA EXPRESION----
//----COMPROBAR CHECK Y CALCULAR LA EXPRESION----
footerBtn.addEventListener("click", () => {
    pERROR.textContent = ""; // Limpiar el mensaje de error previo

    try {
        let total = eval(inputExpresion.value); // Evaluar la expresión
        if (respuestaSeleccionada === mockData[0].correcta) {
            alert("Respuesta correcta " + "\nEl resultado es: " + total);
        } else {
            alert("Incorrecto, intenta de nuevo " + "\nEl resultado es: " + total);
        }
    } catch (error) {
        pERROR.textContent = "Expresión inválida: " + error.message; // Mostrar el mensaje de error
    }
});
