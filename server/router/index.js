const koaRouter = require('koa-router');
const router = new koaRouter();
const routes = require('./routes');
const validator = require('../midllewares/validator');

routes.forEach(route => {
  const { method, path, controller, valid } = route;
  router[method](path, validator(valid), controller);
});

module.exports = router;
