const express = require('express');
const router = express.Router();
const clientController = require('../controller/clientController');

/* GET a new resource */
router.get('/', clientController.getClient)
router.post('/login', clientController.getLogin)

module.exports = router