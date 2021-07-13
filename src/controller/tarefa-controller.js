 const rotasTarefa = (app, bd, TarefaModel) => {
    app.get('/tarefas', (req, resp) => {
        resp.send('<h1> Tarefas <h1>');
    });
    app.post('/tarefas', (req, resp) => {
        const{titulo,descricao,status,dataDeCriacao} = req.body
        let novaTarefa = new Tarefa(titulo,descricao,status,dataDeCriacao)
        bd.Tarefa.push(novaTarefa)
        resp.send('Tarefa criada com Sucesso!');
    });
}

module.exports = rotasTarefa