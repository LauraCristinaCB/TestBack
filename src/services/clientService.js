const clientDB = require('../database/clientDB')

const getClient = async (id) => {
    return await clientDB.getClient(id)
}

const getLogin = async (email,password) => {
    return await clientDB.getLogin(email,password)
}


module.exports= {
    getClient,
    getLogin
}