const request = require('supertest');
const { app, server } = require('../index');

afterAll(() => {
    server.close(); // Ensure the server shuts down after tests
});

describe('GET /greet', () => {
    test('should return 400 Bad Request if name is missing', async () => {
        try {
            await request(app).get('/greet');
        } catch (error) {
            expect(error.response.status).toBe(400);
            expect(error.response.data).toEqual({ error: 'Name is required' });
        }
    });

    test('should return a greeting if name is provided', async () => {
        const response = await request(app).get('/greet', { params: { name: 'Akram' } });
        expect(response.status).toBe(200);
        expect(response.data).toBe('Hello, Akram!');
    });
});
