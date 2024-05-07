const client = require('../models/client')

const getClient = async (id) =>{
    const clientObj = await client.client.findByPk(id);
    return clientObj;
}

module.exports = {
    getClient
}