const { tempFilePath } = require('../config');
const { checkDirExist } = require('../utils/file');
const router = require('../router');
const koaBody = require('koa-body'); // koa-body 就是为了处理每个 Request 中的信息，要放到路由前面先让他处理再进路由
const response = require('./response');
const error = require('./error');
const cors = require('@koa/cors'); // 跨域配置
const log = require('./log'); // 添加日志

// 路由处理,router.allowedMethods()用在了路由匹配router.routes()之后,所以在当所有路由中间件最后调用.此时根据ctx.status设置response响应头
const mdRoute = router.routes();
const mdRouterAllowed = router.allowedMethods();

/**
 * 参数解析
 * https://github.com/koajs/bodyparser
 */
const mdKoaBody = koaBody({
  multipart: true, // 支持文件上传, 必须设置为true!!!
  // encoding: 'gzip', // 启用这个会报错
  formidable: {
    uploadDir: tempFilePath, // 设置文件上传目录
    keepExtensions: true,    // 保持文件的后缀
    maxFieldsSize: 200 * 1024 * 1024, // 设置上传文件大小最大限制，默认2M
    onFileBegin: (name,file) => { // 文件上传前的设置
      // 检查文件夹是否存在如果不存在则新建文件夹
      checkDirExist(tempFilePath);
      // 获取文件名称
      const fileName = file.name;
      // 重新覆盖 file.path 属性
      file.path = `${tempFilePath}/${fileName}`;
    },
    onError:(err)=>{
      console.log(err);
    }
  }
})
// 统一返回格式
const mdResHandler = response();
// 错误处理
const mdErrorHandler = error();

// 跨域处理
const mdCors = cors({
  origin: '*',
  credentials: true,
  allowMethods: [ 'GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH' ]
});

// log4j
const mdLogger = log();

// 洋葱模型, 务必注意中间件的执行顺序!!!
module.exports = [
  mdKoaBody,
  mdCors,
  mdLogger,
  mdResHandler,
  mdErrorHandler,
  mdRoute,
  mdRouterAllowed
];
