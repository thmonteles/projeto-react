const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 8000;

app.use(cors());

const JSON_FILE_PATH = path.join(__dirname, 'db.json');
app.get('/', async (req, res) => {
  try {
    const jsonData = await fs.readFile(JSON_FILE_PATH, 'utf-8');
    const data = JSON.parse(jsonData);
    res.json(data);
  } catch (error) {
    console.error('Erro ao ler o arquivo JSON:', error);
    res.status(500).json({ error: 'Erro ao obter os dados' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
