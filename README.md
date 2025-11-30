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

<br><br><br><br><br><br><br>














# 📘 Deploy de Aplicación Angular 18 en GitHub Pages


Guía técnica y automatizada para despliegue continuo.

Documentacion linkedin: https://www.linkedin.com/pulse/how-deploy-angular-18-app-github-pages-mohamed-el-fadili-ahbrc/


## 🚀 Introducción

Este proyecto utiliza Angular 18 (Standalone Components) y GitHub Actions para desplegar automáticamente la aplicación en GitHub Pages cada vez que se realiza un push en la rama main.

La guía incluye:

✔ Instalación de herramientas de despliegue

✔ Configuración completa de angular.json

✔ Scripts necesarios en package.json

✔ Configuración de enrutamiento con HashLocationStrategy

✔ Pipeline automatizado con GitHub Actions

✔ Activación de GitHub Pages

✔ Acceso a la aplicación desplegada

<br>

## 🛠️ Paso 1: Instalar angular-cli-ghpages

Este paquete permite desplegar la aplicación Angular compilada hacia la rama gh-pages.

```
npm install --save-dev angular-cli-ghpages
```

## 🧩 Paso 2: Configurar angular.json

En Angular 17 y 18 los artefactos de build se ubican bajo:

```
dist/<app-name>/browser
```
Por eso tu angular.json debe incluir:


```JSON
{
  "architect": {
    "build": {
      "options": {
        "outputPath": "dist/<app-name>"
      }
    },
    "deploy": {
      "builder": "angular-cli-ghpages:deploy",
      "options": {
        "repo": "https://github.com/<username>/<repo-name>.git",
        "branch": "gh-pages",
        "dir": "dist/<app-name>/browser"
      }
    }
  }
}
```

Reemplaza:

- `<app-name>` → nombre de tu aplicación

- `<username>` → nombre de usuario GitHub

- `<repo-name>` → nombre del repositorio

<br>

## 📦 Paso 3: Configurar scripts en package.json

Agrega los scripts para compilar y desplegar:

```JSON
{
  "scripts": {
    "build": "ng build --base-href /<repo-name>/",
    "deploy": "ng deploy"
  }
}
```
Esto asegura que la aplicación funcione correctamente bajo la ruta de GitHub Pages:

<br>

## 🔐 Paso 4: Configurar HashLocationStrategy (Opcional)

GitHub Pages solo sirve archivos estáticos, por lo que las rutas SPA pueden fallar con “404 Not Found”.

Para evitarlo, configura el enrutamiento basado en hash.

En `app.config.ts`:

```typescript
import { HashLocationStrategy, LocationStrategy } from "@angular/common";

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
};
```
<br>

## 🏗️ Paso 5: Compilar e implementar manualmente

También puedes hacerlo desde consola:

```bash
npm run build
npm run deploy
```

## ⚙️ Paso 6: Habilitar GitHub Pages

1. En tu repositorio, ve a Settings

2. En el menú lateral, selecciona Pages

3. En Source, selecciona:

- Deploy from a branch

- Branch: gh-pages

4. Guarda los cambios

Una vez activo, tu página estará disponible en:

```
https://<username>.github.io/<repo-name>/
```

## 🤖 Despliegue Automático con GitHub Actions

Este repositorio incluye un workflow YAML que despliega automáticamente cada vez que se hace push a main.

Crea el archivo:

```
.github/workflows/deploy.yml
```

Contenido:

```yaml
name: Deploy Angular 18 to GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm install

      - name: Build Angular app
        run: npm run build --if-present

      - name: Deploy to GitHub Pages
        run: |
          npx angular-cli-ghpages --dir=dist/<app-name>/browser \
            --repo=https://github.com/<username>/<repo-name>.git \
            --name="GitHub Actions" \
            --email="actions@github.com" \
            --branch=gh-pages
```

Asegúrate de reemplazar:

- `<app-name>`
- `<username>`
- `<repo-name>`



## 🧪 Verificación del despliegue

Puedes verificar el estado del despliegue en:

👉 GitHub → Actions → Deploy Angular 18 to GitHub Pages

<br>

## 🎉 Conclusión

Tras esta configuración:

- Cada push a main → despliegue automático

- Compatibilidad completa con Angular 18

- Sin configuraciones manuales repetitivas

- Escalable para cualquier proyecto SPA

<br><br><br><br><br><br><br>



























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

