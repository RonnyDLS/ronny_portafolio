# 🌐 MyPortafolio

MyPortafolio es una aplicación web desarrollada en **Angular 18** diseñada para presentar de forma organizada y visualmente atractiva mis proyectos, experiencia, habilidades y trayectoria profesional.  
El sistema utiliza una arquitectura totalmente dinámica basada en un archivo `db.json`, lo que permite gestionar todo el contenido del portafolio sin necesidad de modificar el código fuente.

El objetivo principal de este proyecto es ofrecer una plataforma moderna, rápida y responsiva donde cualquier persona o empresa pueda explorar mis trabajos, visualizar tecnologías utilizadas, revisar demostraciones, y obtener una visión clara de mis capacidades como desarrollador.

Este portafolio integra:

- 🔹 Diseño responsive para todo tipo de dispositivos  
- 🔹 Gestión dinámica de proyectos, imágenes, videos y descripciones  
- 🔹 Sección de habilidades, tecnologías y redes sociales  
- 🔹 Interfaz moderna desarrollada con HTML, CSS y TypeScript  
- 🔹 Navegación optimizada y carga eficiente de recursos  

A continuación se incluyen los comandos y herramientas principales utilizados durante el desarrollo.

# 📚 Documentación Técnica — `db.json`

Este archivo funciona como una **base de datos local** utilizada para alimentar todo el contenido dinámico del portafolio.  
A continuación se describen todas las claves, estructuras y tipos de datos.

---

## 🖼️ `imagenes`

| Propiedad | Tipo | Descripción |
|----------|------|-------------|
| `imagenes` | `string[]` | Lista de rutas de imágenes generales utilizadas en el portafolio. |

---

## 👋 `bienvenida`

Contiene la información mostrada en el banner de presentación del portafolio.

| Propiedad | Tipo | Descripción |
|-----------|-------|-------------|
| `habilidades` | `string[]` | Lista de roles o habilidades principales. |
| `infoBienvenida` | `string[]` | Párrafos que conforman el texto de bienvenida. |

---

## 🧑‍💻 `sobreMy`

Información personal y profesional del desarrollador.

### **Campos principales**

| Propiedad | Tipo | Descripción |
|-----------|-------|-------------|
| `imgPerfil` | `string` | Ruta de la imagen de perfil. |
| `nombre` | `string` | Nombre del desarrollador. |
| `especialidad` | `string` | Especialidad profesional. |
| `tituloSobreMy` | `string` | Título visible de la sección. |

---

### **misRedes**  
Lista de redes sociales.

| Propiedad | Tipo | Descripción |
|-----------|-------|-------------|
| `nombreRed` | `string` | Nombre de la red social. |
| `urlRed` | `string` | URL de la red social. |
| `urlImg` | `string` | Ícono de la red social. |

---

### **conocimientos**  
Conjunto de tecnologías manejadas.

| Propiedad | Tipo | Descripción |
|-----------|-------|-------------|
| `conocimiento` | `string` | Nombre de la tecnología. |
| `color` | `string` | Color usado para representar la tecnología. |
| `url_img` | `string` | Ícono de la tecnología. |

---

### **infoSobreMy**  
Párrafos descriptivos.

| Propiedad | Tipo | Descripción |
|-----------|-------|-------------|
| `parrafo` | `string` | Texto explicativo (HTML permitido). |

---

## 🚀 `proyectos`

Listado de proyectos del portafolio.

### **Campos principales del proyecto**

| Propiedad | Tipo | Descripción |
|-----------|-------|-------------|
| `id` | `string` | Identificador único del proyecto. |
| `destacado` | `boolean` | Indica si el proyecto es destacado. |
| `titulo` | `string` | Título del proyecto. |
| `resumen_proyecto` | `string` | Descripción breve mostrada en la tarjeta. |
| `url_img_resume` | `string` | Imagen principal del proyecto. |

---

### **urlDireccionesProyecto**  
Listado de enlaces relacionados (repo, demo, documentación, etc.)

| Propiedad | Tipo | Descripción |
|-----------|-------|-------------|
| `urlDireccionProyecto` | `string` | Enlace externo asociado al proyecto. |

---

### **informacion_proyecto**  
Descripción extendida del proyecto.

| Propiedad | Tipo | Descripción |
|-----------|-------|-------------|
| `parrafo` | `string` | Texto o contenido detallado del proyecto (HTML permitido). |

---

### **urls_imagenes**  
Galería de imágenes del proyecto.

| Propiedad | Tipo | Descripción |
|-----------|-------|-------------|
| `url` | `string` | Imagen del proyecto. |

---

### **urls_videos**  
Videos asociados al proyecto.

| Propiedad | Tipo | Descripción |
|-----------|-------|-------------|
| `url` | `string` | Enlace o video embed. |

---

### **tecnologias**  
Tecnologías utilizadas en el proyecto.

| Propiedad | Tipo | Descripción |
|-----------|-------|-------------|
| `tecnologia` | `string` | Nombre de la tecnología. |
| `color` | `string` | Color distintivo. |
| `url_img` | `string` | Ícono representativo. |

---

### **colaboradores**  
Personas que participaron en el desarrollo del proyecto.

| Propiedad | Tipo | Descripción |
|-----------|-------|-------------|
| `nombre` | `string` | Nombre del colaborador. |
| `apellido` | `string` | Apellido del colaborador. |
| `url_img_perfil` | `string` | Imagen del perfil del colaborador. |
| `perfil_letra` | `string` | Iniciales usadas como placeholder. |
| `color_fondo_perfil` | `string` | Color del fondo del avatar. |

---

