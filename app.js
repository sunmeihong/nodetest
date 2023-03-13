const express = require("express");

const app = express();

const router = require('./myrouter.js');

//配置解析表单数据的中间件 否则无法获取req.body的内容
app.use(express.urlencoded({ extended: false }));

//配置路由
app.use(router);




// app.get('/', function (req, res) {

//     res.send('okcle');
// });


app.listen('8088', () => {
    console.log('服务端已启动');
});