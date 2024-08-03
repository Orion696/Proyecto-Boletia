# Boletia Internal Tool

## Introducción

Este proyecto es una solución web desarrollada para sistematizar las funcionalidades internas de Boletia, permitiendo al equipo interno resolver problemas operativos sin necesidad de generar peticiones de soporte. La aplicación se ha desarrollado utilizando React y Bootstrap para asegurar una experiencia de usuario óptima y una arquitectura escalable.

## Estructura del Proyecto

El proyecto sigue una estructura organizada para facilitar el mantenimiento y la escalabilidad. A continuación, se describe la estructura principal de carpetas y archivos:

```
src/
├── components/
│   ├── BannerForm/
│   │   ├── BannerForm.js
│   │   ├── BannerForm.css
│   ├── BannerList/
│   │   ├── BannerList.js
│   │   ├── BannerList.css
│   ├── PaymentForm/
│   │   ├── PaymentButton.js
├── pages/
│   ├── Home/
│   │   ├── Home.js
│   │   ├── Home.css
├── App.js
├── epaycoService.js
├── index.js
├── index.css
```

## Descripción de Carpetas y Archivos

- **src/components/**: Contiene los componentes reutilizables de la aplicación.
  - **BannerForm/**: Componente para el formulario de configuración de banners.
  - **BannerList/**: Componente para listar y mostrar los banners configurados.
  - **PaymentForm/**: Componente para gestionar los pagos utilizando ePayco.
- **src/pages/**: Contiene las páginas principales de la aplicación.
  - **Home/**: Página principal que integra los componentes BannerForm y BannerList.
- **src/App.js**: Componente raíz de la aplicación que configura el enrutamiento.
- **src/epaycoService.js**: Servicio para interactuar con la API de ePayco.
- **src/index.js**: Punto de entrada principal de la aplicación.
- **src/index.css**: Archivo de estilos globales.

## Requisitos Previos

- Node.js
- npm (Administrador de paquetes de Node)

## Instalación

Para configurar el proyecto, siga los siguientes pasos:

1. Clonar el repositorio:

```sh
git clone https://github.com/Orion696/Proyecto-Boletia.git
cd Proyecto-Boletia
```

2. Instalar las dependencias:

```sh
npm install
```

## Ejecución del Proyecto

Para iniciar la aplicación, ejecute el siguiente comando:

```sh
npm start
```

## Descripción de Componentes

### BannerForm

- **Ubicación**: `src/components/BannerForm/BannerForm.js`
- **Descripción**: Componente de formulario que captura información sobre los eventos, incluyendo el nombre del evento, fecha, hora, URL de compra y tres imágenes (Desktop, Tablet, Mobile).
- **Validaciones**:
  - El nombre del evento es obligatorio.
  - La fecha del evento es obligatoria.
  - La hora del evento es obligatoria.
  - La URL de compra debe ser válida.
  - Cada imagen no debe exceder los 800 KB.

### BannerList

- **Ubicación**: `src/components/BannerList/BannerList.js`
- **Descripción**: Componente que muestra una lista de banners agregados con sus respectivas imágenes en tamaños específicos. Las imágenes se muestran en un carrusel que permite la navegación automática y manual. Permite la eliminación de banners con confirmación previa. Incluye un botón para realizar pagos utilizando ePayco.

### PaymentButton

- **Ubicación**: `src/components/PaymentForm/PaymentButton.js`
- **Descripción**: Componente de botón que inicia el proceso de pago utilizando ePayco.

### Home

- **Ubicación**: `src/pages/Home/Home.js`
- **Descripción**: Página principal que integra los componentes BannerForm y BannerList. Maneja el estado de los banners agregados y permite su gestión.

## Estilos

- **Uso de CSS y Bootstrap**: Se utiliza CSS y Bootstrap para el diseño y estilos de los componentes. Los estilos personalizados se definen en archivos CSS para cada componente (`BannerForm.css`, `BannerList.css`, `Home.css`).

### Ejemplos de clases utilizadas:

- `.banner-form-container`: Define el contenedor del formulario con alineación centrada y padding.
- `.banner-item`: Estilos para cada banner, incluyendo bordes y padding.
- `.banner-links a, .banner-links button`: Estilos para los botones de "Buy Tickets" y "Delete" con efectos de hover.
- `.carousel-inner`: Estilos para centrar las imágenes dentro del carrusel.
- `.payment-button`: Estilos personalizados para el botón de pago.

## Funcionalidades Adicionales

### Validaciones

- Validación del tamaño y formato de las imágenes.
- Validación de campos obligatorios y formato de URL.

### Responsividad

- Las imágenes y otros elementos se ajustan automáticamente para ser responsivos y adaptarse a diferentes tamaños de pantalla.

## Mantenimiento y Extensión

### Agregar Nuevos Módulos

Para agregar nuevas funcionalidades o módulos, cree nuevos componentes y páginas siguiendo la estructura existente. Agregue las nuevas rutas en `App.js` para habilitar la navegación.

## Conclusión

Esta documentación proporciona una guía completa y técnica del proyecto Boletia, cubriendo desde la estructura del proyecto hasta la configuración, ejecución y mantenimiento. Si tiene alguna pregunta o necesita más detalles, por favor consulte los archivos de código fuente o contacte al equipo de desarrollo.
