/**
 * Created by Administrator on 2017/8/9.
 */
const Article = require('../../model/artcle.model')


// 发布文章
exports.publish = async(ctx,next)=>{
  const header = ctx.request.body.title?ctx.request.body.title.replace(/(^\s+)|(\s+$)/g,''):''
  const _class = ctx.request.body.class?ctx.request.body.class.replace(/(^\s+)|(\s+$)/g,''):''
  const content = ctx.request.body.content
  const created = new Date().toLocaleString()
  const updated = new Date().toLocaleString()
  let err_msg
  if(header.length === 0){
    err_msg = '文章标题不能为空'
  }
  if(_class.length === 0){
    err_msg = '文章分类必选'
  }

  if(err_msg){
    ctx.status = 422
    return ctx.body = { err_msg }
  }
  try {
    const result = await Article.create({header,_class,content,created,updated})
    if(result){
      return ctx.body = '文章保存成功'
    }else {
      return ctx.body = '文章保存失败'
    }
  }catch (err){
    return ctx.body = err
  }

}

// 查看文章列表
exports.articleList = async(ctx)=>{
  try {
    const result = await Article.find()
    return ctx.body = result
  }catch (err){
    return ctx.body = err
  }
}

// 删除文章
exports.deletaArticleById = async(ctx)=>{
  try{
    let _id = ctx.params.id
    const result = await Article.remove({_id:_id})
    return ctx.body = {code:1,result:result}
  }catch (err){
    return ctx.body = {code:0,result:err}
  }
}