 function rotasTarefa(app, bd, TarefaModel){
    app.get('/tarefas', (req, resp) => {
        resp.json(bd.tarefas);
    });
    app.post('/tarefas', (req, resp) => {
        const{titulo,descricao,status,dataDeCriacao} = req.body
        let novaTarefa = new TarefaModel(titulo,descricao,status,dataDeCriacao)
        bd.tarefas.push(novaTarefa)
        resp.json('Tarefa criada com Sucesso!');
    });
}

    const filtroTarefa = (app, bd) => {
        app.get('/tarefas/:titulo', (req, resp) => {
            const filtro = bd.tarefas.filter(el => el.titulo == req.params.titulo)
            resp.json(filtro);
        })}

    const deletaTarefa = (app, bd) => {
        app.delete('/tarefas/:titulo', (req, resp) => {
            let parametroTitulo = req.params.titulo
        bd.tarefas = bd.tarefas.filter((el) => {
            return el.titulo !== parametroTitulo
        })
        resp.json({
            message:`Não existe tarefa com esse titulo ${req.params.titulo}`,
            error: true
        })})};


module.exports = {
    rotasTarefa:rotasTarefa,
    filtroTarefa:filtroTarefa,
    deletaTarefa:deletaTarefa}