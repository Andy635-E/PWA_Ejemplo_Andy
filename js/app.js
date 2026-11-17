// Obtenemos la URL del servidor
var url = window.location.href;

// Definimos que nuestro sw.js se encuentra en el repositorio de GitHub Pages
var ubicacionSw = '/PWA_Ejemplo_Andy/sw.js';

if (navigator.serviceWorker) {
    // Si la URL contiene localhost, la ruta es la local del proyecto; de lo contrario, es la de GitHub
    if (url.includes('localhost')) {
        ubicacionSw = '/sw.js';
    }

    navigator.serviceWorker.register(ubicacionSw);
}