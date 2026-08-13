const fs = require('fs');
const indexHtml = fs.readFileSync('index.html', 'utf8');
const newSlides = fs.readFileSync('new_slides.json', 'utf8');

// Encuentra el bloque de `const SLIDES = [...];` y lo reemplaza (manejando saltos de línea extra)
const regex = /const SLIDES = (\[[\s\S]*?\])\s*;/;
const updatedHtml = indexHtml.replace(regex, `const SLIDES = ${newSlides};`);

if (updatedHtml !== indexHtml) {
  fs.writeFileSync('index.html', updatedHtml, 'utf8');
  console.log('¡SLIDES actualizado exitosamente!');
} else {
  console.log('No se pudo encontrar el bloque SLIDES para reemplazar.');
}
