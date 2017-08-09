/**
 * Created by Administrator on 2017/8/8.
 */
const path = require('path')
const _ = require('lodash')
const fs = require('fs')

const all = {
  mongo:{
    options:{
      useMongoClient:true
    }
  }
}
const config = _.merge(all,require('./development')||{})
module.exports = config
