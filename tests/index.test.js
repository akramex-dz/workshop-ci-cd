const request = require('supertest');
const { app, server } = require('../index');

afterAll(() => {
    server.close(); // Ensure the server shuts down after tests
});

describe('GET /', () => {
    test('should return "Hello, CI/CD!"', async () => {
        const response = await app.get('/');
        expect(response.data).toBe('Hello, CI/CD!');
        expect(response.status).toBe(200);
    });
});

