const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001; // გამოყენება ექსპრესის მიერ განსაზღვრული პორტისთვის

// Middleware
app.use(cors());
app.use(express.json());
app.use('/assets', express.static(path.join(__dirname, 'src/assets'))); // სტატიკური ფაილების სერვირება

// Root endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the photo API!');
});

// Load photos from JSON file
app.get('/api/photos', (req, res) => {
    fs.readFile(path.join(__dirname, 'photos.json'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read photos' });
        }
        res.json(JSON.parse(data));
    });
});

// Load homesection from JSON file
app.get('/api/homesection', (req, res) => {
    fs.readFile(path.join(__dirname, 'homesection.json'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read homesection' });
        }
        res.json(JSON.parse(data));
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
