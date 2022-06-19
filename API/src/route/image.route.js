import express from "express";
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import { postUpload } from '../controller/image.controller.js';
import logger from '../util/logger.js';

const imageRoutes = express.Router();

imageRoutes.route('/')
    /**
     * @swagger
     * /image:
     *    post:
     *       description: Obtener token
     *       responses:
     *          200:
     *             description: OK
     */
    .post(postUpload);

export default imageRoutes;