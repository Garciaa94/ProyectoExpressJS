# ProyectoExpressJS

Realizacion de backend y frontend para carrito de compras

[![Express Logo](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)](http://expressjs.com/)

  Fast, unopinionated, minimalist web framework for [node](http://nodejs.org).
  
# lenvantamiento 

clonar de la app en el terminal de preferencia

```objective-c
git clone git@github.com:Garciaa94/ProyectoExpressJS.git
```

Desde el editor de su preferencia ir a la la Carpeta  \backend-shopping-cart y ejecucar los siguientes comandos.

El comando "npm install" instalara las dependencias y modulos para no tener problemas con la ejecucion del proyecto.

El comando "npx nodemon app.js" levantara nuestro backend para luego ser usado en el frontend.

```objective-c
npm install
npx nodemon app.js
```

Se iniciara el proyecto en el puerto 3000
en la ruta http://localhost:3000/         solo se visualizara un texto con HOME!
y nustra api de la coneccion a la base de datos en http://localhost:3000/items (API de productos ) y http://localhost:3000/orders (API DE usuario)
```objective-c
http://localhost:3000/
http://localhost:3000/items
```


# nodeExpress
Express es una infraestructura de aplicaciones web Node.js mínima y flexible que proporciona un conjunto sólido de características para las aplicaciones web y móviles.

modulos utilizados 

```objective-c
npm i body-parser
```

Es un Middleware de análisis de cuerpo .js nodo.

```objective-c
npm i mongoose
```

Mongoose es una herramienta de modelado de objetos de MongoDB diseñada para trabajar en un entorno asíncrono. Mangosta soporta tanto promesas como devoluciones de llamada.

```objective-c
npm i nodemon
```

<a>nodemon es una herramienta que ayuda a desarrollar aplicaciones basadas en node.js reiniciando automáticamente la aplicación node cuando se detectan cambios de archivo en el directorio.

nodemon no requiere ningún cambio adicional en el código o método de desarrollo. nodemon es un contenedor de reemplazo para . Para utilizar , reemplace la palabra en la línea de comandos al ejecutar el script.nodenodemonnode </a>

revisar el archivo de dependencias [Paquetes](https://github.com/Garciaa94/ProyectoExpressJS/blob/main/backend-shopping-cart/package.json).
```objective-c
 "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "mongoose": "^5.10.9",
    "path": "^0.12.7",
    "stripe": "^8.114.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.4"
  }
```
