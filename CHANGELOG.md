# Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo de manera cronológica.

## [1.3.0] - 2026-06-30

### Added
*   Implementación de la diapositiva interactiva de **Requisitos** (Slide 5) con un diseño espacial personalizado (patrón de puntos de fondo, nube de título y personaje Flynn animado).
*   Visualización interactiva y revelado secuencial paso a paso de las tres columnas de requisitos:
    1. **Tiempo Hora** (*7 - 12 meses, 3 veces por semana*)
    2. **Decisión Cultural y Económica** (*Apoyo familiar*)
    3. **G.A.L.A** (*Decisión inmediata*)

### Changed
*   Reposicionamiento del personaje Flynn hacia el borde derecho de la pantalla para evitar cualquier solapamiento visual con la tercera columna de requisitos, logrando que parezca asomarse de manera natural por el lateral derecho del slide.
*   Redistribución armónica de las 3 columnas de requisitos para aprovechar el ancho total del escenario y aumento de la escala tipográfica en títulos y descripciones para maximizar la legibilidad.

## [1.2.0] - 2026-06-24

### Added
*   Implementación de la diapositiva de portada (Slide 0) con fondo amarillo vibrante (`image2.png`), patrón de puntos de fondo (`image3.png`), logotipo de BIONIC mind (`image4.png`) y el elenco completo de 6 personajes animados en la parte inferior (`image1.png`).
*   Modificación de la lógica de navegación para cambiar el texto del botón principal de "revelar" a "Empezar" en la portada, y deshabilitar el botón de "reiniciar" cuando la portada está activa.
*   Animación flotante sutil aplicada a los personajes de la portada para dotar de dinamismo e interactividad visual a la presentación desde el primer instante.

## [1.1.0] - 2026-06-24

### Added
*   Integración del marco decorativo espacial oficial (`image22.png`) extraído del documento original como fondo del escenario.
*   Incorporación y alineación matemática exacta del logo oficial de **BIONIC mind** (`image4.png`) con bordes amarillos y texto blanco en la cabecera superior.
*   Tipografía premium personalizada con Google Fonts (`Pangolin` para términos en inglés, `Baloo 2` para términos en español).
*   Efecto de delineado grueso (`text-shadow`) para asegurar máxima legibilidad de las palabras sobre los fondos gráficos.
*   Interacciones dinámicas y hover en GIFs interactivos con ampliación de tamaño y rotación leve en CSS.
*   Navegación completa por teclado (Flechas Izquierda / Derecha para diapositivas, Espacio para revelar).
*   Leyendas e indicaciones inferiores de atajos del teclado en la interfaz.

### Changed
*   Rediseño total de la barra de controles inferior, ahora con panel flotante de estilo **Glassmorphic** translúcido con bordes iluminados.
*   Botones de navegación y botones de acción ("Revelar" / "Reiniciar") rediseñados con colores corporativos (Naranja y Turquesa) y esquinas redondeadas.

### Removed
*   Estilo de fondo genérico de líneas diagonales amarillas y blancas.
*   Limpieza y eliminación de archivos de prueba e imágenes temporales generados durante el desarrollo (`logo_test.png`, etc.) del directorio raíz.

---

## [1.0.0] - 2026-06-24
*   Versión base del vocabulario interactivo con estructura básica de diapositivas y revelado inicial mediante clics básicos.
