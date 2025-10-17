import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

// Serve static HTML files from the html folder
app.use(express.static(path.join(__dirname, '..', 'html')));

// Fallback to index.html for all routes
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '..', 'html', 'index.html'));
});

const port = 5000;
const server = app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
  
  // Keep the process alive
  setInterval(() => {
    // Heartbeat to prevent process exit
  }, 1000);
});

// Prevent server from closing
server.on('error', (error) => {
  console.error('Server error:', error);
});

// Keep process alive on uncaught errors
process.on('uncaughtException', (error) => {
  console.error('Uncaught exception:', error);
});

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled rejection:', reason);
});
