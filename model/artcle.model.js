/**
 * Created by Administrator on 2017/8/9.
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ArticleSchema = new Schema({
  header:{
    type:String
  },
  _class:{
    type:String
  },
  description:{
    type:String
  },
  markdown:{
    type:String
  },
  content:{
    type:String
  },
  created:{
    type:String,
    default:new Date().toLocaleString()
  },
  updated:{
    type:String,
    default:new Date().toLocaleString()
  }
})

module.exports = mongoose.model('Article',ArticleSchema)