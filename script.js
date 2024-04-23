document.addEventListener("DOMContentLoaded", function() {
    // Función para cambiar el color de fondo al hacer clic en un botón
    const cambiarColorFondo = function(color) {
        document.body.style.backgroundColor = color;
    };

    // Función para animar el cambio de color de fondo
    const animarCambioColorFondo = function(colorInicial, colorFinal, duracion) {
        const tiempoInicio = performance.now();
        const actualizarColor = function() {
            const tiempoTranscurrido = performance.now() - tiempoInicio;
            const progreso = Math.min(tiempoTranscurrido / duracion, 1);
            const colorActual = interpolarColor(colorInicial, colorFinal, progreso);
            document.body.style.backgroundColor = colorActual;
            if (progreso < 1) {
                requestAnimationFrame(actualizarColor);
            }
        };
        requestAnimationFrame(actualizarColor);
    };

    // Función para interpolar entre dos colores
    const interpolarColor = function(colorInicial, colorFinal, progreso) {
        const rInicial = parseInt(colorInicial.substring(1, 3), 16);
        const gInicial = parseInt(colorInicial.substring(3, 5), 16);
        const bInicial = parseInt(colorInicial.substring(5, 7), 16);
        const rFinal = parseInt(colorFinal.substring(1, 3), 16);
        const gFinal = parseInt(colorFinal.substring(3, 5), 16);
        const bFinal = parseInt(colorFinal.substring(5, 7), 16);
        const rInterpolado = interpolarComponenteColor(rInicial, rFinal, progreso);
        const gInterpolado = interpolarComponenteColor(gInicial, gFinal, progreso);
        const bInterpolado = interpolarComponenteColor(bInicial, bFinal, progreso);
        return `rgb(${rInterpolado}, ${gInterpolado}, ${bInterpolado})`;
    };

    // Función para interpolar entre dos componentes de color
    const interpolarComponenteColor = function(componenteInicial, componenteFinal, progreso) {
        return Math.round(componenteInicial + (componenteFinal - componenteInicial) * progreso);
    };

    // Ejemplo de uso:
    const botonCambiarColor = document.getElementById("botonCambiarColor");
    botonCambiarColor.addEventListener("click", function() {
        cambiarColorFondo("#ff0000"); // Cambiar el color de fondo directamente
        // O animar el cambio de color de fondo
        //animarCambioColorFondo("#000000", "#ff0000", 1000);
    });

    // Más funcionalidades y eventos pueden ser agregados según las necesidades de tu proyecto
});
