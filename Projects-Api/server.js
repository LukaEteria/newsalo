const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/assets', express.static(path.join(__dirname, 'src/assets'))); // Static file serving for images

// Root endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the photo API!'); // Simple response for the root URL
});

// Load photos from JSON file
app.get('/api/photos', (req, res) => {
    fs.readFile(path.join(__dirname, 'photos.json'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read photos' });
        }
        res.json(JSON.parse(data)); // Return JSON data from the file
    });
});
app.get('/api/homesection', (req, res) => {
    fs.readFile(path.join(__dirname, 'homesection.json.json'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read homesection' });
        }
        res.json(JSON.parse(data)); // Return JSON data from the file
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
