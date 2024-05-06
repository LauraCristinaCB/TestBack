const state = require('../models/state')

const getState = async (id) =>{
    const stateObj = await state.State.findByPk(id);
    return stateObj;
}

module.exports = {
    getState
}