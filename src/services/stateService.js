const stateDB = require('../database/stateDB')

const getState = async (id) => {
    return await stateDB.getState(id)
}

module.exports= {
    getState
}