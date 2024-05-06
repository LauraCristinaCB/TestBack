const stateService = require ('../services/stateService')

const getState = async function(req, res) {
        console.log(req.query)
        const state = await stateService.getState(req.query.id);
        if (state) {
            res.send(state)
        } else {
            res.status(404).send("state not found");
        }
}

module.exports={
    getState
}