const request = require('supertest');
const { app } = require('../index');

afterAll(() => {
    server.close(); // Ensure the server shuts down after tests
});

describe('GET /', () => {
    test('should return "Hello, CI/CD!"', async () => {
        const response = await request(app).get('/');
        expect(response.data).toBe('Hello, CI/CD!');
        expect(response.status).toBe(200);
    });
});

