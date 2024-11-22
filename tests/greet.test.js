const axios = require('axios');
const BASE_URL = 'http://localhost:3000';

describe('GET /greet', () => {
    test('should return 400 Bad Request if name is missing', async () => {
        try {
            await axios.get(`${BASE_URL}/greet`);
        } catch (error) {
            expect(error.response.status).toBe(400);
            expect(error.response.data).toEqual({ error: 'Name is required' });
        }
    });

    test('should return a greeting if name is provided', async () => {
        const response = await axios.get(`${BASE_URL}/greet`, { params: { name: 'Akram' } });
        expect(response.status).toBe(200);
        expect(response.data).toBe('Hello, Akram!');
    });
});
