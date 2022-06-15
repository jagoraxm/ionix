import express from "express";
import { getUsers, getUser, createUser, deleteUser, updateUser } from '../controller/user.controller.js';

import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';


const usersRoutes = express.Router();

usersRoutes.route('/')
    /**
     * @swagger
     * /user:
     *    get:
     *       description: Obtener todos los usuarios
     *       responses:
     *          200:
     *             description: OK
     */
    .get(getUsers)
    .post(createUser);

usersRoutes.route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser);

export default usersRoutes;