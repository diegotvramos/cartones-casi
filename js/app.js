


// importándo módulos
import menu from "./menu.js";
import slider from "./carousel.js";
import contact from "./form.js";



// Evento DOMContentLoaded: Este bloque de código espera a que el 
// DOM esté completamente cargado antes de ejecutar las funciones 
// importadas. Aquí se inicializan varias funcionalidades

const d = document;


d.addEventListener("DOMContentLoaded", (e) => {

    try {
        contact();
    } catch (error) {
        console.error("Error en contact:", error);
    }
    
    try {
        menu();
    } catch (error) {
        console.error("Error en menu:", error);
    }

    try {
        slider();
    } catch (error) {
        console.error("Error en slider:", error);
    }

    
});

