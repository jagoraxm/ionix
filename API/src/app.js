import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import Response from './domain/response.js';
import HttpStatus from './controller/user.controller.js';
import userRoutes from './route/user.route.js';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'API Users Librería',
            version: '1.0.0'
        }
    },
    apis: ['app.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

dotenv.config();
const app = express();
app.use(cors({ origin: '*'}));
app.use(express.json());


console.log(process.env);

app.use('/user', userRoutes)
app.use('/apiDoc', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.get('/', (req, res) => res.send( new Response(HttpStatus.OK.code, HttpStatus.OK.status, 'Usuario API, v1.0.0', { data: {data: 'data'} }) ));
app.all('*', (req, res) => res.status(HttpStatus.NOT_FOUND.code)
    .send( new Response(HttpStatus.NOT_FOUND.code, HttpStatus.NOT_FOUND.status, 'La ruta no existe en el servidor') ));

export default app;
