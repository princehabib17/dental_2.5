import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;

// Serve static files from html directory
app.use(express.static(path.join(__dirname, 'html')));

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Arevalo Dental Clinic server running' });
});

// Fallback to index.html for SPA behavior
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ Arevalo Dental Clinic website running at http://localhost:${PORT}`);
    console.log(`📱 Mobile responsive design with bilingual support`);
    console.log(`🦷 Full dental clinic website with appointment booking`);
}).on('error', (err) => {
    console.error('❌ Server failed to start:', err);
    process.exit(1);
});