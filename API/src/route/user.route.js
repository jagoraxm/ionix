import express from "express";
import { getUsers, getUser, createUser, deleteUser, updateUser } from '../controller/user.controller.js';

const usersRoutes = express.Router();

usersRoutes.route('/')
    .get(getUsers)
    .post(createUser);

usersRoutes.route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser);

export default usersRoutes;