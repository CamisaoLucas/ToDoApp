 const rotasUsuario = (app) => {
    app.get('/usuarios', (req, resp) => {
        resp.send('<h1> Usuários <h1>');
    });
    app.post('/usuarios', (req, resp) => {
        resp.send('<h1>Rota ativada com POST e recurso<h1>');
    });
}
module.exports = rotasUsuario