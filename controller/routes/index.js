/**
 * Created by Administrator on 2017/8/3.
 */

const router = require('koa-router')()
const login = require('../login/login.controller')
const Article = require('../article/article.controller')

// import {login} from '../login/login.controller'

module.exports  = function (app) {
  router.post('/login',login.login)
  router.post('/article/publish',Article.publish)
  router.get('/article/list',Article.articleList)
  app
    .use(router.routes())
    .use(router.allowedMethods());
}
