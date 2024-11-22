const axios = require('axios');
const BASE_URL = 'http://localhost:3000';

describe('GET /', () => {
    test('should return "Hello, CI/CD!"', async () => {
        const response = await axios.get(`${BASE_URL}/`);
        expect(response.data).toBe('Hello, CI/CD!');
        expect(response.status).toBe(200);
    });
});

