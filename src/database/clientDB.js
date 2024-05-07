const client = require('../models/client')

const getClient = async (id) =>{
    const clientObj = await client.client.findByPk(id);
    return clientObj;
}

const getLogin = async (email,password) =>{
    const loginObj = await client.client.findOne({
        where: {
            email: email,
            password: password
        },
    });
    return loginObj;
}

module.exports = {
    getClient,
    getLogin
}