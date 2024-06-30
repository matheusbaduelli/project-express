const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rota para servir o arquivo HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','frontend', 'index.html'));
});

app.get('/outrapag.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','frontend', 'outrapag.html'));
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});






