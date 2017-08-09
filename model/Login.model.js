/**
 * Created by Administrator on 2017/8/8.
 */

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const crypto = require('crypto')

const LoginSchema = new Schema({
  username:{
    type:String,
    unique:true
  },
  password:{
    type:String
  }
})

/*LoginSchema
  .virtual('password')
  .set(function (password) {
    this._password = password
    this.salt = this.makeSalt()
    this.hashedPassword = this.encryptPassword(password)
  })
  .get(function () {
    return this._password
  })*/


exports.LoginSchema = LoginSchema
module.exports = mongoose.model('Login',LoginSchema)