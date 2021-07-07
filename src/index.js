const express = require('express');
const usuarioController = require('./controller/usuario-controller');
const tarefaController = require('./controller/tarefa-controller');

const port = 5555

const app = express();

usuarioController(app);
tarefaController(app);

app.listen(port, ()=>console.log(`[INFO]: Servidor rodando em localhost: ${port}`));
