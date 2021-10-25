import { Ajax } from '@/utils/request'

interface LoginYapiParams {
  email: string
  password: string
}

export default {
  login<T>(params: LoginYapiParams) {
    return Ajax.post<T, LoginYapiParams>('/api/user/login', params)
  }
}
