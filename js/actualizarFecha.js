
// Codigo sin modularizar


// document.addEventListener('DOMContentLoaded', (event) => {
//     const updateElement = document.getElementById('ultima-actualizacion');
//     const observer = new MutationObserver(() => {
//         const fecha = new Date();
//         const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
//         updateElement.textContent = `Última actualización: ${fecha.toLocaleDateString('es-ES', opciones)}`;
//     });

//     // Configurar el observador para observar cambios en todo el body
//     observer.observe(document.body, { childList: true, subtree: true, characterData: true });

//     // Inicializar la fecha de actualización
//     const fecha = new Date();
//     const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
//     updateElement.textContent = `Última actualización: ${fecha.toLocaleDateString('es-ES', opciones)}`;
// });


// Vamos a integrar la funcionalidad de actualización de fecha en tu archivo de módulos.

// Asegúrate de que tu HTML tenga el contenedor para la fecha de actualización:

export default function actualizarFecha() {
    const updateElement = document.getElementById('ultima-actualizacion');
    const observer = new MutationObserver(() => {
        const fecha = new Date();
        const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
        updateElement.textContent = `Última actualización: ${fecha.toLocaleDateString('es-ES', opciones)}`;
    });

    // Configurar el observador para observar cambios en todo el body
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });

    // Inicializar la fecha de actualización
    const fecha = new Date();
    const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
    updateElement.textContent = `Última actualización: ${fecha.toLocaleDateString('es-ES', opciones)}`;
}

