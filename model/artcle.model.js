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
  content:{
    type:String
  }
})

module.exports = mongoose.model('Article',ArticleSchema)