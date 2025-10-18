import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import http from 'http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = parseInt(process.env.PORT || '39717');

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

// Start server
const server = app.listen(port, '0.0.0.0', () => {
  console.log(`Listening on http://0.0.0.0:${port}`);
  
  // Make HTTP request to self to prove port is open
  http.get(`http://localhost:${port}/health`, (res) => {
    console.log(`Port ${port} is accessible - status: ${res.statusCode}`);
  }).on('error', (err) => {
    console.error('Port check failed:', err.message);
  });
});

// Error handling
server.on('error', (err) => {
  console.error('Server error:', err);
  process.exit(1);
});
