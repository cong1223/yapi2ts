const { auth } = require('../controllers')
const { schAuth } = require('../schema')
const routes = [
  {
    path: '/login',
    method: 'post',
    valid: schAuth.loginParams,
    controller: auth.loginYapi
  }
]

module.exports = routes
