//  https://joi.dev/api/?v=17.4.0
const Joi = require('joi')

const loginParams = {
  body: Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
  })
}

module.exports = {
  loginParams
}
