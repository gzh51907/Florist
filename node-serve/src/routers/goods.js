const express = require('express');
const Router = express.Router();
const {
    mongo
} = require('../db')
const {
    formatData
} = require('../utils')

const colName = 'goods'

// 查询首页数据
Router.post('/main', async (req, res) => {
    let result;
    try {
        result = await mongo.find(colName, req.body);
        result = formatData({
            data: result
        })
    } catch (err) {
        result = formatData({
            code: 0
        })
    }
    res.send(result);
})

module.exports = Router;