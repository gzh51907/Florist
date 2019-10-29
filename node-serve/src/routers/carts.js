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
Router.post('/', async (req, res) => {
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

// 修改购物车的数据
Router.post('/edit', async (req, res) => {
    let {
        username,
        gid,
        num
    } = req.body;
    let result
    try {
        await mongo.update(colName, {
            username,
            gid,
        }, {
            $set: {
                num
            }
        });
        result = formatData()
    } catch (err) {
        result = formatData({
            code: 0
        })
    }
    res.send(result);
})

// 查询某用户购物车
Router.get('/', async (req, res) => {
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

// 查询某用户购物车是否拥有某商品
Router.get('/check', async (req, res) => {
    let {
        username,
        gid
    } = req.query;
    let result = await mongo.find(colName, {
        username,
        gid: Number(gid)
    });
    result = formatData({
        data: result
    });
    res.send(result);
})

// 购物车删除功能
Router.post('/delete', async (req, res) => {
    let {
        username,
        gid
    } = req.body;
    let result = await mongo.remove(colName, {
        username,
        gid
    });
    result = formatData({
        data: result
    });
    res.send(result);
})

module.exports = Router;