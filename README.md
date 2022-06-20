## Table of Contents
1. [General Info](#general-info)
2. [Requerimientos](#requierimientos)
3. [Installation](#installation)
### General Info
***
Prouectos generados para IONIX que contempla la generación de una API con CRUD de usuarios con base de datos en MySQL y un Front en React con Redux que consume la API.
## Technologies
***
A list of technologies used within the project:
* [NodeJS]: Version 12.3 
* [MySQL]: Version 2.18.2
* [CORS]: Version 2.8.5
* [Express]: Version 4.18.1
* [Pino]: Version 8.0.0
* [Jest]: Version 28.1.1
* [Supertest]: Version 6.2.3
## Installation
***
BACKEND --> Una pequeña INTRO para la instalación. En caso de ejecutarlo en modo DEV
```
$ git clone https://github.com/jagoraxm/ionix.git
$ cd ../path/to/the/file (API)
$ npm install
$ npm run start:dev
```
***
FRONTEND --> Una pequeña INTRO para la instalación. En caso de ejecutarlo en modo DEV
```
$ git clone https://github.com/jagoraxm/ionix.git
$ cd ../path/to/the/file (front/login)
$ npm install
$ npm start
```
***
Si se desea ejecutar desde el ambiente dockerizado...
```
$ git clone https://github.com/jagoraxm/ionix.git
$ cd ../path/to/the/file
$ docker-compose up -d --build
```
Información extra: Para este caso se genera desde el archivo docker-compose una imagen para MySQL, con este punto existe un problema con los GRANTS por lo que la BD real que se referencia en el código se encuentra en un servidor en la nube.

Existen algunos detalles respecto al prioyecto REACT ya que no fue terminado en su totalidad por tiempos efectivos pero se referencio el uso con AXIOS de los servicios de nodejs, así mismo la base de datos de MySQL aunque fue dockerizada, para el uso perse de la aplicación fue referenciada a una nube privada para que exista, también se agregan querys de creación por si se quiere probar de forma local.
## Testing
***
Para ejecutar las pruebas unitarias dentro del proyecto basta con ejecutar el siguiente comando...
```
npm run test
```
Cabe mencionar que si estas en ambiente Linux o MAC de la linea del package.json de esta forma: 
```
"test": "NODE_OPTIONS=--experimental-vm-modules jest"
```

En caso de que estes en ambiente Windows dejarlo de la siguiente forma:
```
"test": "set NODE_OPTIONS=--experimental-vm-modules jest"
```
Información extra: Se agregaron solo validaciones de EndPoints, por el tiempo de atención del requerimiento habría que robustecer las validaciones como parametros de entrada y salida, reglas de negocio, etc...