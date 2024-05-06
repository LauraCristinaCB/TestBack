require("dotenv").config();
const { pool } = require('./services/connection');
const express = require('express');
const router = express.Router();


pool();


module.exports = router;