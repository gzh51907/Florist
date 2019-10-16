const express = require('express');
const Router = express.Router();
const {
    mysql: query
} = require('../db');
const {
    formatData
} = require('../utils')

module.exports = Router;