const Koa = require('koa')
const app = new Koa()
const compose = require('koa-compose')
const MD = require('./midllewares')
const config = require('./config')
const utils = require('./utils')

const port = '3333'
const host = '0.0.0.0'

app.context.config = config
app.context.utils = utils

app.use(compose(MD))

app.listen(port, host, () => {
  console.log(`API server listening on ${host}:${port}`)
})

app.on('error', (err, ctx) => {
  if (ctx) {
    ctx.body = {
      code: 9999,
      message: `程序运行时报错：${err.message}`
    }
  }
})
