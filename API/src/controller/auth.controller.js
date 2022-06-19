import logger from '../util/logger.js';
import jwt from 'jsonwebtoken';
import QUERY from '../query/user.query.js';
import database from '../config/mysql.config.js';
import Response from '../domain/response.js';

const HttpStatus = {
    OK: { code: 200, status: 'OK' },
    CREATED: { code: 201, status: 'CREATED' },
    NO_CONTENT: { code: 204, status: 'NO_CONTENT' },
    BAD_REQUEST: { code: 400, status: 'BAD_REQUEST' },
    NOT_AUTH: { code: 403, status: 'NOT_AUTH' },
    NOT_FOUND: { code: 404, status: 'NOT_FOUND' },
    INTERNAL_SERVER_ERROR: { code: 500, status: 'INTERNAL_SERVER_ERROR' },
};

export const postAuth = (req, res) => {
    logger.info(`${req.method} ${req.originalUrl}, generando token`);
    
    database.query(QUERY.LOGIN_USER, Object.values(req.body), (error, results) => {
        logger.info(`${results[0]}, RESULTADOS`);

        if(results[0] === undefined) {
            res.status(HttpStatus.NO_CONTENT.code)
                .send(new Response(HttpStatus.NO_CONTENT.code, HttpStatus.NO_CONTENT.status, `No se encontraron usuarios`, {}))

        } else {
            jwt.sign({app: {idApp: "Service"}}, 'secretkey', {expiresIn: '3h'}, (err, token) => {
                    res.status(HttpStatus.OK.code).send({token});
                })
        }
    })   
}

export default HttpStatus;
