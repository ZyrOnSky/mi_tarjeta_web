// ============================================
// TARJETA DE PRESENTACIÓN INTERACTIVA
// ============================================
// Este script maneja la interactividad de la tarjeta,
// incluyendo el cambio de color de fondo al hacer clic en el botón.

// ============================================
// VARIABLES GLOBALES
// ============================================

// Array de colores para cambiar el fondo de la tarjeta
const colores = [
    '#ffffff',      // Blanco (color original)
    '#f0f8ff',     // Azul claro
    '#fff0f5',     // Rosa claro
    '#f0fff0',     // Verde claro
    '#fff8dc',     // Beige claro
    '#e6e6fa',     // Lavanda
    '#ffe4e1',     // Rosa suave
    '#f5f5dc'      // Beige
];

// Contador para rastrear el índice del color actual
let indiceColor = 0;

// Variables para almacenar referencias a los elementos del DOM
let tarjeta;
let btnCambiar;

// ============================================
// FUNCIONES
// ============================================

/**
 * Cambia el color de fondo de la tarjeta al siguiente color del array
 * y muestra un mensaje de alerta con información sobre el cambio
 */
function cambiarColorFondo() {
    // Incrementar el índice del color
    indiceColor = (indiceColor + 1) % colores.length;
    
    // Aplicar el nuevo color de fondo a la tarjeta
    tarjeta.style.backgroundColor = colores[indiceColor];
    
    // Mostrar mensaje de alerta informativo
    alert(`¡Color cambiado! Ahora el fondo es: ${colores[indiceColor]}\n\nHaz clic nuevamente para ver más colores.`);
}

/**
 * Inicializa los event listeners cuando el DOM está completamente cargado
 */
function inicializar() {
    // Obtener referencia a la tarjeta principal
    tarjeta = document.getElementById('tarjeta');
    
    // Obtener referencia al botón interactivo
    btnCambiar = document.getElementById('btnCambiar');
    
    // Verificar que los elementos existan
    if (!tarjeta || !btnCambiar) {
        console.error('Error: No se encontraron los elementos necesarios en el DOM');
        return;
    }
    
    // Agregar event listener al botón para cambiar el color
    btnCambiar.addEventListener('click', cambiarColorFondo);
    
    // Mensaje en consola para confirmar que el script se cargó correctamente
    console.log('Tarjeta de presentación inicializada correctamente');
}

// ============================================
// INICIALIZACIÓN
// ============================================

// Esperar a que el DOM esté completamente cargado antes de inicializar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializar);
} else {
    // Si el DOM ya está cargado, inicializar inmediatamente
    inicializar();
}

