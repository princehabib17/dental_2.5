import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 5000;

// Serve static files from html directory
app.use(express.static(join(__dirname, '..', 'html')));

// Fallback to index.html for any route
app.get('*', (_req, res) => {
  res.sendFile(join(__dirname, '..', 'html', 'index.html'));
});

// Start server and keep alive
const server = app.listen(port, '0.0.0.0', () => {
  const address = server.address();
  console.log(`✅ Server running on port ${port}`);
  console.log(`✅ Server address:`, address);
  console.log(`✅ Website accessible!`);
  
  // Force flush stdout to ensure logs are visible immediately
  if (process.stdout.write('')) {
    process.stdout.write('\n');
  }
});

// Keep alive with heartbeat to ensure process doesn't exit
setInterval(() => {
  console.log(`💚 Server alive on port ${port} - ${new Date().toLocaleTimeString()}`);
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
