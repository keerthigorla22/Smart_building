// server.js
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle POST request for contact form (if needed)
app.post('/contact', (req, res) => {
    // Handle form submission
    res.send('Contact form submitted');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
