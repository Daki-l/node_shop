const fs = require('fs')
var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
// 路由加载
var mount = require('mount-routes')

var app = express()


/**
 *
 * 公共系统初始化
 *
 */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const users = [
    { id: 1, name: 'User 1', email: 'user1@example.com' },
    { id: 2, name: 'User 2', email: 'user2@example.com' },
    { id: 3, name: 'User 3', email: 'user3@example.com' }
];
// 获取所有用户信息的接口
app.get('/api/users', (req, res) => {
    res.json(users);
});


// 定义日志
// var log4js = require('./modules/logger');
// log4js.use(app);

/**
 *
 * 统一处理无响应
 *
 */
// 如果没有路径处理就返回 Not Found
app.use(function(req, res, next) {
  res.sendResult(null, 404, 'Not Found')
})

app.listen(8888)

module.exports = app
