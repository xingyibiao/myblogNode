/**
 * Created by Administrator on 2017/8/3.
 */
const Koa = require('Koa')
const app = new Koa()
const cors = require('koa-cors')
const bodyParser = require('koa-body-parser')
const mongoose = require('./config/connect')


app.use(cors())
app.use(bodyParser())
require('./controller/routes')(app)



app.listen(3030,()=>{
  console.log('猛禽系统已启动')
})