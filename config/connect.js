/**
 * Created by Administrator on 2017/8/8.
 */

const path = require('path')
const fs = require('fs')
const mongoose = require('mongoose')
const config = require('./env/index')
const modelsPath = path.join(__dirname, '../model')

// 连接数据库
mongoose.connect(config.mongo.uri,config.mongo.options,function (err,data) {
  console.log('success')
})
fs.readdirSync(modelsPath).forEach(function (file) {
  if (/(.*)\.(js$|coffee$)/.test(file)) {
    require(modelsPath + '/' + file)
  }
})
//mongoose promise 风格 [mongoose.Promise = global.Promise]
mongoose.Promise = require('bluebird')

module.exports = mongoose