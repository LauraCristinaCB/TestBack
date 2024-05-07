const clientService = require ('../services/clientService')

const getClient = async function(req, res) {
        const client = await clientService.getClient(req.query.id);
        if (client) {
            res.send(client)
        } else {
            res.status(404).send("client not found");
        }
}

const getLogin = async function(req, res) {
    const { email, password } = req.body;
    console.log(email)
    console.log(password)
    const login = await clientService.getLogin(email,password);
    if (login) {
        res.send(login)
    } else {
        res.status(404).send("client not found");
    }
}

module.exports={
    getClient,
    getLogin
}