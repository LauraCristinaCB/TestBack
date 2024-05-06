const express = require('express');
const router = express.Router();
const stateController = require('../controller/stateController');

/* GET a new resource */
router.get('/', stateController.getState)

module.exports = router