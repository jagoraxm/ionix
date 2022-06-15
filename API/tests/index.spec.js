import app from '../src/app.js';
import request from 'supertest';
import logger from '../src/util/logger.js';

describe('GET /user', () => {
    test('GET - Prueba de respuesta code=200', async () => { 
        const response = await request(app).get('/user').send();
        expect(response.statusCode).toBe(200);
    })

    test('GET - Debe responder un Objeto', async () => { 
        const response = await request(app).get('/user').send();
        expect(response.body).toBeInstanceOf(Object);
    })
})

describe('POST /user', () => {
    test('POST - Prueba de respuesta code=200', async () => { 
        const response = await request(app).post('/user').send();
        expect(response.statusCode).toBe(500);
    })

})

describe('GET /user/:id', () => {

    test('GET - Prueba de respuesta code=200 con usuario id=1', async () => { 
        const response = await request(app).get('/user/1').send();
        expect(response.statusCode).toBe(200);
    })

    test('GET - Debe responder un Objeto con usuario id=1', async () => { 
        const response = await request(app).get('/user/1').send();
        expect(response.body).toBeInstanceOf(Object);
    })
})