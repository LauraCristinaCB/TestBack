const clientDB = require('../database/clientDB')

const getClient = async (id) => {
    return await clientDB.getClient(id)
}

module.exports= {
    getClient
}