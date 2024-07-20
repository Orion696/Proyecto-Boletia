# Boletia Internal Tool

## Introducción

Este proyecto es una solución web desarrollada para sistematizar las funcionalidades internas de Boletia, permitiendo al equipo interno resolver problemas operativos sin necesidad de generar peticiones de soporte. La aplicación se ha desarrollado utilizando React y Tailwind CSS para asegurar una experiencia de usuario óptima y una arquitectura escalable.

## Estructura del Proyecto

El proyecto sigue una estructura organizada para facilitar el mantenimiento y la escalabilidad. A continuación, se describe la estructura principal de carpetas y archivos:

```
src/
├── components/
│   ├── BannerForm/
│   │   ├── BannerForm.js
│   │   ├── BannerForm.module.css
│   ├── BannerList/
│   │   ├── BannerList.js
│   │   ├── BannerList.module.css
├── pages/
│   ├── Home/
│   │   ├── Home.js
│   │   ├── Home.module.css
├── App.js
├── index.js
├── index.css


### Descripción de Carpetas y Archivos

- **`src/assets/`**: Contiene recursos estáticos como imágenes.
- **`src/components/`**: Contiene los componentes reutilizables de la aplicación.
  - **`BannerForm/`**: Componente para el formulario de configuración de banners.
  - **`BannerList/`**: Componente para listar y mostrar los banners configurados.
- **`src/pages/`**: Contiene las páginas principales de la aplicación.
  - **`Home/`**: Página principal que integra los componentes `BannerForm` y `BannerList`.
- **`src/App.js`**: Componente raíz de la aplicación que configura el enrutamiento.
- **`src/index.js`**: Punto de entrada principal de la aplicación.
- **`src/index.css`**: Archivo de estilos globales utilizando Tailwind CSS.

## Configuración del Entorno

### Requisitos Previos

- Node.js
- npm (Node Package Manager)

### Instalación

Para configurar el proyecto, siga los siguientes pasos:

1. **Crear la aplicación React**:
   npx create-react-app boletia-app
   cd boletia-app

2. **Instalar React Router**:
   npm install react-router-dom@latest

3. **Instalar y configurar Tailwind CSS**:
   npm install tailwindcss@latest postcss@latest autoprefixer@latest
   npx tailwindcss init -p
   Luego, configure el archivo `tailwind.config.js` y agregue Tailwind a su `index.css`.

### Configuración de Tailwind CSS

1. **Actualizar `tailwind.config.js`**:
   javascript
   module.exports = {
     content: [
       "./src/**/*.{js,jsx,ts,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }

2. **Actualizar `index.css`**:
   css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;


## Ejecución del Proyecto

Para iniciar la aplicación, ejecute el siguiente comando:

npm start


## Descripción de Componentes

### BannerForm

**Ubicación**: `src/components/BannerForm/BannerForm.js`

**Descripción**: Componente de formulario que captura información sobre los eventos, incluyendo el nombre del evento, fecha, hora, URL de compra y tres imágenes (Desktop, Tablet, Mobile).

**Validaciones**:
- El nombre del evento es obligatorio.
- La fecha del evento es obligatoria.
- La hora del evento es obligatoria.
- La URL de compra debe ser válida.
- Cada imagen no debe exceder los 800 KB.

### BannerList

**Ubicación**: `src/components/BannerList/BannerList.js`

**Descripción**: Componente que muestra una lista de banners agregados con sus respectivas imágenes en tamaños específicos. Permite la eliminación de banners con confirmación previa.

### Home

**Ubicación**: `src/pages/Home/Home.js`

**Descripción**: Página principal que integra los componentes `BannerForm` y `BannerList`. Maneja el estado de los banners agregados y permite su gestión.

## Estilos

### Uso de Tailwind CSS

Se utiliza Tailwind CSS para el diseño y estilos de los componentes. Los estilos personalizados se definen en módulos CSS para cada componente (`BannerForm.module.css`, `BannerList.module.css`, `Home.module.css`).

**Ejemplos de clases utilizadas**:
- `@apply flex flex-col space-y-2` para disposiciones flexibles y espaciamiento.
- `@apply bg-green-300 hover:bg-green-500` para botones con efectos de hover.
- `@apply text-red-400` para mensajes de error.

## Funcionalidades Adicionales

### Validaciones

- Validación del tamaño y formato de las imágenes.
- Validación de campos obligatorios y formato de URL.

### Responsividad

- Las imágenes y otros elementos se ajustan automáticamente para ser responsivos y adaptarse a diferentes tamaños de pantalla.

## Mantenimiento y Extensión

### Agregar Nuevos Módulos

Para agregar nuevas funcionalidades o módulos, cree nuevos componentes y páginas siguiendo la estructura existente. Agregue las nuevas rutas en `App.js` para habilitar la navegación.
