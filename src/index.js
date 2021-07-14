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
const bd = require('./infra/bd');
const { emailUsuario, rotasUsuario, deletaUsuario } = require('./controller/usuario-controller');
const { rotasTarefa, filtroTarefa, deletaTarefa } = require('./controller/tarefa-controller');

//MiddleWare
app.use(express.json())


//Rotas
rotasUsuario(app, bd, User);
rotasTarefa(app, bd, Tarefa);
emailUsuario(app,bd,User);
filtroTarefa(app,bd,Tarefa);
deletaUsuario(app,bd,User);
deletaTarefa(app,bd,Tarefa)


//Listen
app.listen(port, ()=>console.log(`[INFO]: Servidor rodando em localhost: ${port}`));