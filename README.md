# 🎴 Mi Tarjeta de Presentación Web

## 📋 Descripción del Proyecto

Este proyecto es una **tarjeta de presentación interactiva** desarrollada como ejercicio práctico para aprender los fundamentos del desarrollo web frontend. La tarjeta permite mostrar información personal de manera visual y atractiva, con funcionalidad interactiva mediante JavaScript.

## 🎯 Objetivo

Crear una página web responsiva que presente información personal de forma profesional, implementando:
- Estructura HTML semántica
- Estilos CSS modernos y responsive
- Interactividad con JavaScript
- Buenas prácticas de documentación

## 🛠️ Tecnologías Usadas

- **HTML5**: Estructura y contenido de la página
- **CSS3**: Estilos, diseño responsive y animaciones
- **JavaScript (ES6+)**: Funcionalidad interactiva y manipulación del DOM

## 📁 Estructura del Proyecto

```
mi_tarjeta_web/
│
├── index.html      # Estructura HTML de la tarjeta
├── style.css       # Estilos y diseño responsive
├── script.js       # Funcionalidad interactiva
└── README.md       # Este archivo
```

## 🚀 Cómo Ejecutar el Proyecto

### Opción 1: Abrir directamente en el navegador
1. Navega hasta la carpeta `mi_tarjeta_web`
2. Haz doble clic en el archivo `index.html`
3. Se abrirá automáticamente en tu navegador predeterminado

### Opción 2: Usar un servidor local (recomendado)
1. Abre una terminal en la carpeta del proyecto
2. Si tienes Python instalado:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
3. Abre tu navegador y visita: `http://localhost:8000`

### Opción 3: Usar Live Server (VS Code)
1. Instala la extensión "Live Server" en VS Code
2. Haz clic derecho en `index.html`
3. Selecciona "Open with Live Server"

## ✨ Características

- ✅ **Diseño Responsive**: Se adapta a diferentes tamaños de pantalla (móvil, tablet, desktop)
- ✅ **Interactividad**: Botón que cambia el color de fondo de la tarjeta
- ✅ **Animaciones Suaves**: Transiciones y efectos hover
- ✅ **Código Documentado**: Comentarios explicativos en todos los archivos
- ✅ **Diseño Moderno**: Gradientes, sombras y bordes redondeados

## 📝 Funcionalidades

### Cambio de Color Interactivo
- Al hacer clic en el botón "¡Cambiar Color!", la tarjeta cambia su color de fondo
- Se muestra un mensaje de alerta con información sobre el color actual
- El sistema cicla entre 8 colores diferentes

### Diseño Responsive
- **Desktop**: Tarjeta con padding generoso y tamaños de fuente grandes
- **Tablet**: Ajustes en padding y tamaños de fuente
- **Móvil**: Diseño optimizado para pantallas pequeñas

## 🎨 Personalización

Para personalizar la tarjeta con tu información:

1. **Edita `index.html`**:
   - Cambia el texto en `<h1 class="nombre">` por tu nombre
   - Modifica la descripción en `<p class="descripcion">`
   - Reemplaza la URL de la imagen del avatar

2. **Edita `style.css`**:
   - Modifica los colores del gradiente en `body`
   - Ajusta los colores del botón
   - Cambia los colores del borde del avatar

3. **Edita `script.js`**:
   - Agrega o modifica colores en el array `colores`
   - Personaliza el mensaje de alerta

## 📚 Aprendizajes Aplicados

Este proyecto demuestra:
- Uso de etiquetas HTML semánticas (`<div>`, `<img>`, `<h1>`, `<p>`, `<button>`)
- Selectores CSS y diseño responsive con media queries
- Manipulación del DOM con JavaScript (`getElementById`, `addEventListener`)
- Cambio dinámico de estilos con `element.style`
- Buenas prácticas de documentación y comentarios

## 👤 Autor/a

**Milton Villacis**
- Estudiante de programación
- Apasionado por el desarrollo web frontend

## 📄 Licencia

Este proyecto es de código abierto y está disponible para fines educativos.

## 🔗 Enlaces Útiles

- [MDN Web Docs - HTML](https://developer.mozilla.org/es/docs/Web/HTML)
- [MDN Web Docs - CSS](https://developer.mozilla.org/es/docs/Web/CSS)
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)

---

**Nota**: Este proyecto fue desarrollado como parte de un ejercicio práctico de nivel principiante en desarrollo web frontend.

