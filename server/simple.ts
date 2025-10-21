import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Serve static HTML
app.use(express.static(path.join(__dirname, '..', 'html')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'html', 'index.html'));
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

const port = 5000;
const server = app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});

// Keep alive
setInterval(() => {
  console.log(`Server alive on port ${port}`);
}, 10000);

export default server;
