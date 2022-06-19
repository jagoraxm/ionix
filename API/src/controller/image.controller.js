import logger from '../util/logger.js';
import jwt from 'jsonwebtoken';
import multer from 'multer';

const HttpStatus = {
    OK: { code: 200, status: 'OK' },
    CREATED: { code: 201, status: 'CREATED' },
    NO_CONTENT: { code: 204, status: 'NO_CONTENT' },
    BAD_REQUEST: { code: 400, status: 'BAD_REQUEST' },
    NOT_AUTH: { code: 403, status: 'NOT_AUTH' },
    NOT_FOUND: { code: 404, status: 'NOT_FOUND' },
    INTERNAL_SERVER_ERROR: { code: 500, status: 'INTERNAL_SERVER_ERROR' },
};

const storage = multer.diskStorage ({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        logger.info(` --> ${file}`)
        const ext = file.originalName.split('.').pop()
        logger.info(` --> ${ext}`)
        cb(null, `${Date.now()}.${ext}}`)
    }
})

const upload = multer({ storage }).single('file');

export const postUpload = (req, res) => {
    logger.info(`${req.method} ${req.originalUrl}, carga imagen`);
    
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
          // A Multer error occurred when uploading.
          logger.error(`${err}`)
        } else if (err) {
          // An unknown error occurred when uploading.
          logger.error(`${err}`)
        }
    
        // Everything went fine.
        res.status(HttpStatus.OK.code).send({ data: 'Imagen Cargada' });
      })
}

export default HttpStatus;
