# Proyecto de Backend con Node.js y Stripe

Este es un proyecto de backend desarrollado en Node.js que implementa una pasarela de pagos utilizando Stripe. Con esta aplicación, los usuarios pueden realizar pagos en línea de forma segura.

## Requisitos

Antes de comenzar, asegúrate de tener instalados los siguientes requisitos en tu entorno de desarrollo:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Stripe API Keys](https://stripe.com/docs/development/quickstart)

## 1. Instalación

Clona este repositorio en tu máquina local, realiza las siguientes configuraciones y luego instala las dependencias:

```bash
git clone https://github.com/tuusuario/tuproyecto.git
cd tuproyecto
npm install
```
## 2. Configuración

Crea un archivo `.env` en la raíz del proyecto y agrega las siguientes variables de entorno:

```bash
STRIPE_SECRET_KEY=YOUR_STRIPE_SECRET_KEY
```

## 3. Ejecución

Para ejecutar el proyecto en modo de desarrollo, utiliza el siguiente comando:

```bash
npm run dev
```

El proyecto se ejecutará en el puerto 3000. Puedes acceder a él desde tu navegador en la siguiente URL: 
```bash
http://localhost:3000
```

## 4. Rutas de la API

* POST /crear-orden-compra: Crea una sesión de pago con Stripe y devuelve la información necesaria para realizar el pago desde el cliente.

* GET / compra_exitosa: Ruta de confirmación de pago exitoso.

* GET / compra_fallida: Ruta de confirmación de pago fallido (te devuelve a la página inicial).

## 5. Contribuciones

Si deseas contribuir a este proyecto, ¡te doy la bienvenida! Siéntete libre de crear un fork del repositorio y enviar tus pull requests.


