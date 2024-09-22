
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

// export default function actualizarFecha() {
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
// }




// Gracias por compartir el código. El problema parece ser que el observador 
// de mutaciones se activa inmediatamente al inicializarse, lo que actualiza 
// la fecha incluso si no hay cambios en el contenido del HTML. Para evitar 
// esto, puedes modificar el código para que solo actualice la fecha cuando 
// realmente haya un cambio en el contenido.

export default function actualizarFecha() {
    const updateElement = document.getElementById('ultima-actualizacion');
    const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList' || mutation.type === 'characterData') {
                const fecha = new Date();
                const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
                updateElement.textContent = `Última actualización: ${fecha.toLocaleDateString('es-ES', opciones)}`;
                break;
            }
        }
    });

    // Configurar el observador para observar cambios en todo el body
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });

    // Inicializar la fecha de actualización solo si el contenido cambia
    const initialContent = updateElement.textContent;
    const checkInitialContent = setInterval(() => {
        if (updateElement.textContent !== initialContent) {
            const fecha = new Date();
            const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
            updateElement.textContent = `Última actualización: ${fecha.toLocaleDateString('es-ES', opciones)}`;
            clearInterval(checkInitialContent);
        }
    }, 1000);
}

