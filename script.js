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
let canvas;
let ctx;

// Variables para el sistema de partículas
let particulas = [];
let animacionId = null;

// ============================================
// FUNCIONES
// ============================================

/**
 * Crea una partícula individual para el efecto de confeti
 */
function crearParticula(x, y) {
    const coloresParticulas = [
        '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', 
        '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2',
        '#F8B739', '#E74C3C', '#3498DB', '#2ECC71'
    ];
    
    return {
        x: x,
        y: y,
        vx: (Math.random() - 0.5) * 8, // Velocidad horizontal aleatoria
        vy: (Math.random() - 0.5) * 8 - 2, // Velocidad vertical (hacia arriba)
        color: coloresParticulas[Math.floor(Math.random() * coloresParticulas.length)],
        size: Math.random() * 6 + 3, // Tamaño aleatorio entre 3 y 9
        life: 1.0, // Vida de la partícula (1.0 = 100%)
        decay: Math.random() * 0.02 + 0.01 // Velocidad de desvanecimiento
    };
}

/**
 * Crea múltiples partículas desde una posición específica
 */
function crearExplosion(x, y) {
    const cantidad = 30; // Número de partículas por explosión
    
    for (let i = 0; i < cantidad; i++) {
        particulas.push(crearParticula(x, y));
    }
}

/**
 * Actualiza la posición y estado de todas las partículas
 */
function actualizarParticulas() {
    for (let i = particulas.length - 1; i >= 0; i--) {
        const p = particulas[i];
        
        // Actualizar posición
        p.x += p.vx;
        p.y += p.vy;
        
        // Aplicar gravedad
        p.vy += 0.2;
        
        // Reducir vida
        p.life -= p.decay;
        
        // Eliminar partículas muertas
        if (p.life <= 0 || p.y > window.innerHeight + 50) {
            particulas.splice(i, 1);
        }
    }
}

/**
 * Dibuja todas las partículas en el canvas
 */
function dibujarParticulas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particulas.forEach(p => {
        ctx.save();
        ctx.globalAlpha = p.life;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    });
}

/**
 * Bucle de animación de partículas
 */
function animarParticulas() {
    actualizarParticulas();
    dibujarParticulas();
    
    if (particulas.length > 0) {
        animacionId = requestAnimationFrame(animarParticulas);
    } else {
        animacionId = null;
    }
}

/**
 * Inicializa el canvas para las partículas
 */
function inicializarCanvas() {
    canvas = document.getElementById('canvas-particulas');
    if (!canvas) return;
    
    ctx = canvas.getContext('2d');
    
    // Ajustar tamaño del canvas al tamaño de la ventana
    function ajustarCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    ajustarCanvas();
    window.addEventListener('resize', ajustarCanvas);
}

/**
 * Obtiene la posición del botón en la pantalla
 */
function obtenerPosicionBoton() {
    const rect = btnCambiar.getBoundingClientRect();
    return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
    };
}

/**
 * Cambia el color de fondo de la tarjeta al siguiente color del array
 * y activa el efecto de partículas
 */
function cambiarColorFondo() {
    // Incrementar el índice del color
    indiceColor = (indiceColor + 1) % colores.length;
    
    // Aplicar el nuevo color de fondo a la tarjeta
    tarjeta.style.backgroundColor = colores[indiceColor];
    
    // Crear efecto de partículas desde el botón
    const posicion = obtenerPosicionBoton();
    crearExplosion(posicion.x, posicion.y);
    
    // Iniciar animación si no está corriendo
    if (!animacionId) {
        animarParticulas();
    }
}

/**
 * Inicializa los event listeners cuando el DOM está completamente cargado
 */
function inicializar() {
    // Inicializar canvas para partículas
    inicializarCanvas();
    
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

