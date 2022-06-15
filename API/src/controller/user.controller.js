import database from '../config/mysql.config.js';
import Response from '../domain/response.js';
import logger from '../util/logger.js';
import QUERY from '../query/user.query.js';

const HttpStatus = {
    OK: { code: 200, status: 'OK' },
    CREATED: { code: 201, status: 'CREATED' },
    NO_CONTENT: { code: 204, status: 'NO_CONTENT' },
    BAD_REQUEST: { code: 400, status: 'BAD_REQUEST' },
    NOT_FOUND: { code: 404, status: 'NOT_FOUND' },
    INTERNAL_SERVER_ERROR: { code: 500, status: 'INTERNAL_SERVER_ERROR' },
};

export const getUsers = (req, res) => {
    logger.info(`${req.method} ${req.originalUrl}, recorriendo usuarios`);
    database.query(QUERY.SELECT_USERS, (error, results) => {
        if(!results) {
            res.status(HttpStatus.OK.code)
                .send(new Response(HttpStatus.OK.code, HttpStatus.OK.status, `No se encontraron usuarios`));
        } else {
            res.status(HttpStatus.OK.code)
                .send(new Response(HttpStatus.OK.code, HttpStatus.OK.status, `Usuarios obtenidos`, { users: results }))
        }
    })
}

export const getUser = (req, res) => {
    logger.info(`${req.method} ${req.originalUrl}, creando usuario`);
    database.query(QUERY.SELECT_USER, [req.params.id], (error, results) => {
        if(!results[0]) {
            logger.error(error.message);
            res.status(HttpStatus.NOT_FOUND.code)
                .send(new Response(HttpStatus.NOT_FOUND.code, HttpStatus.NOT_FOUND.status, `Usuario con id ${req.paramas.id} no fue encontrado`));
        } else {
            res.status(HttpStatus.OK.code)
                .send(new Response(HttpStatus.OK.code, HttpStatus.OK.status, `Usuario obtenido`, results[0] ))
        }
    })
}

export const createUser = (req, res) => {
    logger.info(`${req.method} ${req.originalUrl}, creando usuario`);
    logger.info(QUERY.CREATE_USER);
    database.query(QUERY.CREATE_USER, Object.values(req.body), (error, results) => {
        if(!results) {
            logger.error(error.message);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR.code)
                .send(new Response(HttpStatus.INTERNAL_SERVER_ERROR.code, HttpStatus.INTERNAL_SERVER_ERROR.status, `Ocurrio un error`));
        } else {
            const user = { id: results.insertedId, ...req.body, created_at: new Date() };
            res.status(HttpStatus.CREATED.code)
                .send(new Response(HttpStatus.CREATED.code, HttpStatus.CREATED.status, `Usuarios creado`, { user }))
        }
    })
}

export const updateUser = (req, res) => {
    logger.info(`${req.method} ${req.originalUrl}, creando usuario`);
    database.query(QUERY.SELECT_USER, [req.params.id], (error, results) => {
        if(!results[0]) {
            logger.error(error.message);
            res.status(HttpStatus.NOT_FOUND.code)
                .send(new Response(HttpStatus.NOT_FOUND.code, HttpStatus.NOT_FOUND.status, `Usuario con id ${req.paramas.id} no fue encontrado`));
        } else {
            logger.info(`${req.method} ${req.originalurl}, actualizando usuario`);
            database.query(QUERY.UPDATE_USER, [...Object.values(req.body), req.params.id], (error, results) => {
                if(!error) {
                    res.status(HttpStatus.OK.code)
                        .send(new Response(HttpStatus.OK.code, HttpStatus.OK.status, 'Usuario actualizado', { id: req.params.id, ...req.body }))
                } else {
                    logger.error(error.message);
                    res.status(HttpStatus.INTERNAL_SERVER_ERROR.code)
                        .send(new Response(HttpStatus.INTERNAL_SERVER_ERROR.code, HttpStatus.INTERNAL_SERVER_ERROR.status, `Ocurrio un error`));
                }
            });
        }
    });
}

export const deleteUser = (req, res) => {
    logger.info(`${req.method} ${req.originalUrl}, borrando usuario`);
    database.query(QUERY.DELETE_USER, [req.params.id], (error, results) => {
        if(!results.affectedRows > 0) {
            res.status(HttpStatus.OK.code)
                .send(new Response(HttpStatus.OK.code, HttpStatus.OK.status, `Usuario borrado`, results[0] ))
        } else {
            res.status(HttpStatus.NOT_FOUND.code)
                .send(new Response(HttpStatus.NOT_FOUND.code, HttpStatus.NOT_FOUND.status, `Usuario con id ${req.paramas.id} no fue encontrado`));
        }
    })
}

export default HttpStatus;