const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, CI/CD!');
});

app.get('/greet', (req, res) => {
    const { name } = req.query;
    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
    }
    res.send(`Hello, ${name}!`);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


module.exports = { app };