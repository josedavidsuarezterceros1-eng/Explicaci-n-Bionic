# Vocabulario Interactivo · BIONIC mind / FLYN

Aplicación web interactiva para el aprendizaje y práctica de vocabulario en inglés y español. Diseñada con una temática espacial de ciencia ficción adaptada del material de presentación oficial de BIONIC mind.

## 🚀 Propósito
El proyecto proporciona un conjunto de diapositivas interactivas donde el usuario puede:
*   Visualizar palabras clave de vocabulario.
*   Interactuar con elementos gráficos (GIFs animados) y revelaciones dinámicas paso a paso.
*   Aprender y validar significados y traducciones con soporte visual directo.

## 🛠️ Stack Tecnológico
*   **Estructura**: HTML5 Semántico.
*   **Estilos**: Vanilla CSS3 (Custom properties, Flexbox, Grid, Glassmorphism, Animaciones fluidas).
*   **Lógica**: Vanilla JavaScript (ES6+), navegación por teclado y mouse.
*   **Fuentes**: Google Fonts (Pangolin para inglés, Baloo 2 para español e interfaz).

## 📦 Instalación y Uso Local

1.  Asegúrate de tener Python instalado en tu sistema.
2.  Abre una terminal en el directorio raíz del proyecto y ejecuta el servidor local de desarrollo:
    ```bash
    python -m http.server 8000
    ```
3.  Abre tu navegador de preferencia e ingresa a:
    [http://localhost:8000/index.html](http://localhost:8000/index.html)

## 📁 Estructura del Repositorio
*   `index.html`: Archivo principal que contiene la estructura HTML, estilos CSS y lógica de JavaScript.
*   `img/`: Directorio con los recursos de imágenes y GIFs del vocabulario y del fondo.
*   `CLAUDE.md`: Directrices de desarrollo y reglas de estilo para colaboradores e IAs.
*   `CHANGELOG.md`: Historial de versiones y cambios introducidos en el proyecto.

## 📝 Control de Versiones (Git)
Este proyecto utiliza Git para llevar un historial limpio de los cambios. 

**Regla importante:** Después de realizar cambios significativos en el código o en la configuración de las diapositivas (como exportar un nuevo JSON desde el modo de edición), asegúrate de guardar tu progreso creando un commit.

Para hacer un commit, abre la terminal y ejecuta:
```bash
git add .
git commit -m "Descripción breve y clara de los cambios que hiciste"
```

---

## 🤖 Guía de Uso del Asistente de IA

> **INSTRUCCIÓN OBLIGATORIA:** Al iniciar cualquier conversación sobre este proyecto, la IA debe presentarse indicando:
> 1. Qué modelo está usando.
> 2. Qué nivel de esfuerzo (effort) tiene configurado.
> 3. Recomendar si es adecuado para la tarea o si debería cambiarse.

### 🧠 Selección de Modelo según el Requerimiento

| Tipo de Tarea | Modelo Recomendado | Esfuerzo (Effort) | Ejemplos |
|---|---|---|---|
| **Simple** (consultas rápidas, correcciones menores) | Haiku / Gemini Flash | Bajo (`low`) | Corregir un typo, preguntar qué hace una línea de código, renombrar una variable. |
| **Medio** (desarrollo moderado, debugging) | Sonnet / Gemini Pro | Medio (`medium`) | Agregar una nueva diapositiva, ajustar estilos CSS, corregir un bug de navegación. |
| **Complejo** (refactorización, diseño nuevo, múltiples archivos) | Opus / Gemini Ultra | Alto (`high`) | Rediseñar el sistema de slides, agregar funcionalidades completas nuevas, migrar tecnología. |

### ⚡ Niveles de Esfuerzo (Effort)

- **`low`** → Respuestas directas y concisas. Ideal para preguntas simples o cambios de una línea.
- **`medium`** → Balance entre profundidad y velocidad. Para tareas de desarrollo estándar.
- **`high`** → Análisis profundo y completo. Para tareas complejas que requieren planificación.

### 🔄 Cuándo Cambiar a un Chat Nuevo

> **⚠️ ALERTA DE CONTEXTO:** La IA debe monitorear el tamaño del contexto de la conversación y avisar al usuario cuando sea recomendable iniciar un chat nuevo.

**Señales de que debes abrir un nuevo chat:**
- 🔴 La conversación lleva **más de 15-20 intercambios** sobre temas diferentes.
- 🔴 La IA empieza a **repetir información** o a **"olvidar"** instrucciones anteriores.
- 🔴 Se han tratado **múltiples temas no relacionados** en el mismo chat.
- 🔴 Los archivos de código analizados superan las **500 líneas** acumuladas en contexto.
- 🟡 Si completaste una tarea y vas a empezar una **tarea completamente diferente**.

**¿Por qué importa?**
Cada mensaje en un chat consume tokens (el "combustible" de la IA). Mientras más largo el historial de la conversación, más tokens se gastan en cada respuesta — incluso para preguntas simples. Abrir un chat nuevo **reinicia el contador** y hace que las respuestas sean más rápidas, precisas y económicas.

**Formato sugerido para el aviso de la IA:**
```
💡 Aviso de contexto: Esta conversación ya tiene bastante historial acumulado.
   Te recomiendo abrir un chat nuevo para tu próxima tarea.
   Así ahorras tokens y obtienes respuestas más precisas.
```
