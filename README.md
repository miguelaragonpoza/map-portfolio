# MAP — Portfolio

Portfolio estático multipágina inspirado en el CV proporcionado.

## Estructura

- `index.html` — Home
- `works.html` — Archivo filtrable de proyectos
- `about.html` — CV / perfil profesional
- `contact.html` — Contacto
- `project-branding.html` — Caso de estudio 01
- `project-motion.html` — Caso de estudio 02
- `project-editorial.html` — Caso de estudio 03
- `css/style.css` — Sistema visual completo
- `js/main.js` — Menú responsive + filtros + reveal

## Dirección de arte

- Azul puro: `#0000FF` / RGB `0,0,255`
- Negro / blanco
- Retícula de 12 columnas
- Bordes de 2 px
- Tipografía monoespaciada: Cascadia Mono / Cascadia Code
- Mayúsculas y jerarquía tipográfica extrema
- Sin frameworks ni dependencias obligatorias

## Personalización

Sustituye los bloques `.project-image` por imágenes reales cuando tengas los trabajos:
`<div class="project-image"><img src="assets/projects/mi-proyecto.jpg" alt=""></div>`

La tipografía utiliza Cascadia si está instalada en el sistema. Para máxima consistencia en producción puedes alojar los archivos de fuente Cascadia en `assets/fonts/` y declararlos con `@font-face`.
