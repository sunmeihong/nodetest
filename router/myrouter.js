
//导入express
const express = require('express');

//创建路由对象
const router = express.Router();

//为路由对象挂载  127.0.0.1:8088/get?name=zs&age=20
router.get('/get', function (req, res) {

    //获取get的查询字符串
    const qs = req.query;

    // 向客户端发送响应 
    res.send({
        status: 0,
        msg: '请求成功',
        data: qs
    });

});

router.post('/post', function (req, res) {

    const by = req.body;

    res.send({
        status: 0,
        msg: '请求成功',
        data: by
    });

});
//向往暴露路由
module.exports = router;