//Imports
const express = require('express');

//configurações
const app = express();
const port = 5555


//Import Routers
const usuarioController = require('./controller/usuario-controller');
const tarefaController = require('./controller/tarefa-controller');


//Models 
const User = require('./models/UserModel')
const Tarefa = require('./models/TarefaModel')


//Banco de Dados
const bd = require('./infra/bd')

//MiddleWare
app.use(express.json())


//Rotas
usuarioController(app, bd, User);
tarefaController(app, bd, Tarefa);


//Listen
app.listen(port, ()=>console.log(`[INFO]: Servidor rodando em localhost: ${port}`));