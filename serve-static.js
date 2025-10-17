import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 5000;

// Serve static files from html directory
app.use(express.static(join(__dirname, 'html')));

// Fallback to index.html for any route
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'html', 'index.html'));
});

// Start server and keep alive
app.listen(port, '0.0.0.0', () => {
  console.log(`✅ Server running on port ${port}`);
  console.log(`✅ Website accessible at http://localhost:${port}`);
});

// Keep alive with heartbeat
setInterval(() => {
  console.log(`💚 Server alive on port ${port}`);
}, 30000);

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('Received SIGTERM, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('Received SIGINT, shutting down gracefully...');
  process.exit(0);
});
