import express from "express";

import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import { postAuth } from '../controller/auth.controller.js';

const authRoutes = express.Router();

authRoutes.route('/')
    /**
     * @swagger
     * /auth:
     *    post:
     *       description: Obtener token
     *       responses:
     *          200:
     *             description: OK
     */
    .post(postAuth);

export default authRoutes;