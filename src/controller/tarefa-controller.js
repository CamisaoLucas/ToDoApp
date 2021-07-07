 const rotasTarefa = (app) => {
    app.get('/tarefas', (req, resp) => {
        resp.send('<h1> Tarefas <h1>');
    });
    app.post('/tarefas', (req, resp) => {
        resp.send('<h1>Rota ativada com POST e recurso<h1>');
    })
}

module.exports = rotasTarefa