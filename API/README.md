## Table of Contents
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Installation](#installation)
### General Info
***
API diseñada para realizar un CRUD de usuarios sencillo, basado en directrices puntuales en sentencias de requerimientos.
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
Una pequeña INTRO para la instalación. En caso de ejecutarlo en modo DEV
```
$ git clone https://github.com/jagoraxm/ionix.git
$ cd ../path/to/the/file
$ npm install
$ npm run start:dev
```

***
Si se desea ejecutar desde el ambiente dockerizado...
```
$ git clone https://github.com/jagoraxm/ionix.git
$ cd ../path/to/the/file
$ docker-compose up -d --build
```
Información extra: Para este caso se genera desde el archivo docker-compose una imagen para MySQL, con este punto existe un problema con los GRANTS por lo que la BD real que se referencia en el código se encuentra en un servidor en la nube.
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