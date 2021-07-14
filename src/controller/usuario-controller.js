  function rotasUsuario(app, bd, UserModel){
    app.get('/usuarios', (req, resp) => {
        resp.json(bd.users);
    });
    app.post('/usuarios', (req, resp) => {
        const{nome,email,senha} = req.body
        let novoUsuario = new UserModel(nome,email,senha)
        bd.users.push(novoUsuario)
        resp.json('Usuário criado com sucesso.');
    });
}
    const emailUsuario = (app, bd) => {
        app.get('/usuarios/:email', (req, resp) => {
            const filtro = bd.users.filter(el => el.email == req.params.email)
            resp.json(filtro);
        })}

    const deletaUsuario = (app, bd) => {
        app.delete('/usuarios/:email', (req, resp) => {
            let parametroEmail = req.params.email
        bd.users = bd.users.filter((el) => {
            return el.email !== parametroEmail
        })
        resp.json({
            message:`não existe usuario com esse email ${req.params.email}`,
            error: true
        })})};

module.exports = { 
    rotasUsuario:rotasUsuario,
    emailUsuario:emailUsuario,
    deletaUsuario:deletaUsuario}