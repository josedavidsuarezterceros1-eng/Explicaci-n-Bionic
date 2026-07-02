# Guía de Desarrollo (CLAUDE.md)

Directrices de desarrollo y reglas de estilo para el proyecto **Vocabulario Interactivo**.

## 🛠️ Comandos de Consola Frecuentes

*   **Iniciar servidor de desarrollo local**:
    ```bash
    python -m http.server 8000
    ```

## 🎨 Estilo y Estándares de Código

*   **Estructura del Proyecto**: Mantener la aplicación autocontenida en `index.html` para facilitar su distribución directa sin herramientas de empaquetado.
*   **CSS**:
    *   Utilizar CSS puro (Vanilla CSS). No usar TailwindCSS, Bootstrap o preprocesadores a menos que se solicite explícitamente.
    *   Definir variables CSS en `:root` para gestionar la paleta de colores de marca y estilos recurrentes.
    *   Mantener el enfoque responsivo y centrado con un contenedor de aspecto controlado para simular el aspecto 16:10 de las diapositivas de PowerPoint.
*   **JavaScript**:
    *   JavaScript Vanilla puro (ES6+).
    *   Lógica basada en eventos del DOM (`DOMContentLoaded`, `click`, `keydown`).
    *   Utilizar variables explicativas y funciones descriptivas de corta extensión.
*   **Tipografía**: Utilizar fuentes del servicio Google Fonts ya configuradas en el proyecto (Pangolin para inglés, Baloo 2 para el resto).

## ⚠️ Reglas Específicas
1.  **Mantener comentarios**: No eliminar ni modificar comentarios explicativos existentes en el código a menos que el código al que se refieren haya cambiado por completo.
2.  **Prevención de Caché**: Al validar cambios en el navegador, añadir parámetros de consulta aleatorios a la URL (ej: `?t=123456`) para evitar que el navegador cargue archivos en caché.
3.  **Integridad Visual**: Cualquier cambio en el diseño del escenario de la diapositiva debe respetar la relación de aspecto y no solaparse con el marco decorativo espacial superior (`image22.png` e `image4.png`).
