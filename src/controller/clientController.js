const clientService = require ('../services/clientService')

const getClient = async function(req, res) {
        console.log(req.query)
        const client = await clientService.getClient(req.query.id);
        if (client) {
            res.send(client)
        } else {
            res.status(404).send("client not found");
        }
}

module.exports={
    getClient
}