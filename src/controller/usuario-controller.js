  const rotasUsuario = (app, bd, UserModel) => {
    app.get('/usuarios', (req, resp) => {
        resp.send(bd.users);
    });
    app.post('/usuarios', (req, resp) => {
        const{nome,email,senha} = req.body
        let novoUsuario = new UserModel(nome,email,senha)
        bd.users.push(novoUsuario)
        resp.send('Usuário criado com sucesso.');
    })
}

module.exports = rotasUsuario