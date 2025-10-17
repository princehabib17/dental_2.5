const express = require('express');
const path = require('path');

const app = express();
const port = 5000;

// Serve static files
app.use(express.static(path.join(__dirname, 'html')));

// Fallback route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'index.html'));
});

// Start server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
  console.log('Website is accessible!');
});

// Keep alive
setInterval(() => {
  console.log(`Still running on port ${port}`);
}, 30000);
