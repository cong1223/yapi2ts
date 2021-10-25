import { Ajax } from '@/utils/request'

interface LoginYapiParams {
  email: string
  password: string
}

const authApi = {
  login<T>(params: LoginYapiParams) {
    return Ajax.post<T, LoginYapiParams>('/login', params)
  }
}

export default authApi
