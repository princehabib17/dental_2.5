import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;

// Serve static files from html directory
app.use(express.static(path.join(__dirname, 'html')));

// Serve React build files
app.use('/react', express.static(path.join(__dirname, 'dist/public')));

// Main route serves HTML version
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'index.html'));
});

// React version route
app.get('/react', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`HTML version: http://localhost:${PORT}`);
    console.log(`React version: http://localhost:${PORT}/react`);
});