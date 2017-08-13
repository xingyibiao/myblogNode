/**
 * Created by Administrator on 2017/8/8.
 */

const Login = require('../../model/Login.model')
const doc = {username:"Maple1123",password:'123456'}

exports.login = async(ctx,next)=>{
  const username = ctx.request.body.username?ctx.request.body.username.replace(/(^\s+)|(\s+$)/g,''):''
  const password = ctx.request.body.password?ctx.request.body.password.replace(/(^\s+)|(\s+$)/g,''):''
  let error_msg
  if(username.length === 0){
    error_msg = '用户名不能为空'
  }else if(password.length === 0){
    error_msg = '密码不能为空'
  }

  if(error_msg){
    ctx.status = 422
    return ctx.body = {error_msg}
  }

  try {
    /*await Login.create(doc,function (err,data) {
      console.log(data)
      // console.log(Login.find())
    })*/
    const user = await Login.findOne({username:username})
    // console.log(user)
    if(!user){
      return ctx.body = {error_msg:'用户名或密码错误'}
    }
    if(user.password !== password){
      return ctx.body = {error_msg:'用户名或密码错误'}
    }
    return ctx.body = "SUCCESS"
  } catch (err){
    return ctx.body = err
  }

}

// 注册， 仅模拟用
exports.register = async(ctx,next)=>{
  try {
    const user = await Login.create({username:"Maple",password:"123456"})
    return ctx.body = user
  }catch (err){
    return ctx.body = err
  }
}