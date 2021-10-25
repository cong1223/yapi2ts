const axios = require('axios')

// 登录yapi以获得cookie
const loginYapi = async (ctx) => {
  const { email, password } = ctx.request.body
  const { data, headers } = await axios.post(
    'http://api.hljnbw.cn/api/user/login',
    {
      email,
      password
    }
  )
  ctx.body = { ...data, ...headers }
}

module.exports = {
  loginYapi
}
