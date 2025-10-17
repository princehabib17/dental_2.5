import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(express.static(path.join(__dirname, '..', 'html')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'html', 'index.html'));
});

const port = 5000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});
