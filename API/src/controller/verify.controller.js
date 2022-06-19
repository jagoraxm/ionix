import logger from '../util/logger.js';
import jwt from 'jsonwebtoken';

const HttpStatus = {
    OK: { code: 200, status: 'OK' },
    CREATED: { code: 201, status: 'CREATED' },
    NO_CONTENT: { code: 204, status: 'NO_CONTENT' },
    BAD_REQUEST: { code: 400, status: 'BAD_REQUEST' },
    NOT_AUTH: { code: 403, status: 'NOT_AUTH' },
    NOT_FOUND: { code: 404, status: 'NOT_FOUND' },
    INTERNAL_SERVER_ERROR: { code: 500, status: 'INTERNAL_SERVER_ERROR' },
};

export const postVerifyToken = (req, res) => {
    logger.info(`${req.method} ${req.originalUrl}, verificando token`);
    logger.info(`Token --> ${req.token}`)
    
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err) {
            logger.error(`${err}`);
            res.sendStatus(HttpStatus.NOT_AUTH.code);
        } else {
            res.json({
                mensaje: "Token válido",
                authData
            });
        }
    })   
}

// Authorization: Bearer <token>
export const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    logger.info(`BEARER --> ${bearerHeader}`);

    if(typeof bearerHeader !== undefined) {
        const bearerToken = bearerHeader.split(" ")[1];
        logger.info(`bearerToken --> ${bearerToken}`);
        req.token = bearerToken;
        logger.info(`req.token --> ${req.token}`);
        next();
    } else {
        res.sendStatus(HttpStatus.NOT_AUTH.code);
    }
}


export default HttpStatus;
