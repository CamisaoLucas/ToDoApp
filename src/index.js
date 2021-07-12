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


//
app.use(express.json())


//Rotas
usuarioController(app);
tarefaController(app);


//Listen
app.listen(port, ()=>console.log(`[INFO]: Servidor rodando em localhost: ${port}`));

console.log(new Tarefa('Resilia','Description','Ativa', '25/03/21'))
