const express = require('express');
const Router = express.Router();
const {
    mongo
} = require('../db')
const {
    formatData
} = require('../utils')

const colName = 'carts'

// 增加购物车的数据
Router.post('/', async(req, res) => {
    let {
        username,
        gid,
        num
    } = req.body;
    let result
    try {
        await mongo.create(colName, [{
            username,
            gid,
            num
        }]);
        result = formatData()
    } catch (err) {
        result = formatData({
            code: 0
        })
    }
    res.send(result);
})

// 查询某用户购物车
Router.get('/', async(req, res) => {
    let {
        username
    } = req.query;
    let result = await mongo.find(colName, {
        username
    });
    result = formatData({
        data: result
    });
    res.send(result);
})

module.exports = Router;