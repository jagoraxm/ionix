import express from "express";

import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import { verifyToken, postVerifyToken } from '../controller/verify.controller.js';

const authVerifyRoutes = express.Router();

authVerifyRoutes.route('/')
    /**
     * @swagger
     * /auth:
     *    post:
     *       description: Validar token
     *       responses:
     *          200:
     *             description: OK
     */
    .post(verifyToken, postVerifyToken);

export default authVerifyRoutes;
