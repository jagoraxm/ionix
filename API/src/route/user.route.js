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
    /**
     * @swagger
     * /user:
     *    post:
     *       description: Crear usuario
     *       responses:
     *          200:
     *             description: OK
     */
    .post(createUser);

usersRoutes.route('/:id')
    /**
     * @swagger
     * /user/:id:
     *    get:
     *       description: Obtener un usuario
     *       responses:
     *          200:
     *             description: OK
     */
    .get(getUser)
    /**
     * @swagger
     * /user/:id:
     *    put:
     *       description: Actualizar usuario
     *       responses:
     *          200:
     *             description: OK
     */
    .put(updateUser)
    /**
     * @swagger
     * /user/:id:
     *    delete:
     *       description: Borrar usuario
     *       responses:
     *          200:
     *             description: OK
     */
    .delete(deleteUser);

export default usersRoutes;