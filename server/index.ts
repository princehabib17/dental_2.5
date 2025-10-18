import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import http from 'http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Health check endpoint - responds immediately
app.get('/health', (_req, res) => {
  res.status(200).send('OK');
});

app.get('/ping', (_req, res) => {
  res.status(200).send('pong');
});

// Serve static files from html directory with proper headers
app.use(express.static(join(__dirname, '..', 'html'), {
  setHeaders: (res: any) => {
    res.set('Cache-Control', 'no-cache');
  }
}));

// Fallback to index.html for any route
app.get('*', (_req, res) => {
  res.sendFile(join(__dirname, '..', 'html', 'index.html'));
});

// Start server on port 39717 (Replit proxy port from .replit config)
const server = app.listen(39717, '0.0.0.0', () => {
  console.log('Server ready');
  console.log('Listening on port 39717');
});

server.on('error', (err) => {
  console.error('Server error:', err);
  process.exit(1);
});
