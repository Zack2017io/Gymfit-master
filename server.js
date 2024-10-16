const express = require('express');
const app = express();
const path = require('path');

// Serve static files from a 'public' directory
app.use(express.static('public'));

// Parse JSON bodies
app.use(express.json());

// Route for the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for the sign up or login page
app.get('/auth', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'auth.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});