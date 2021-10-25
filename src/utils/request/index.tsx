import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

// 接口前缀
const BASE_URL = 'http://api.hljnbw.cn/'

// axios 配置实例
const getAxiosInstance = (): AxiosInstance => {
  const instance: AxiosInstance = Axios.create({
    baseURL: `${BASE_URL}`
  })
  instance.interceptors.request.use((config) => ({
    ...config,
    params: {
      // `params`应该是个对象，不能是其他数据类型
      ...(config.params || {}),
      _: +new Date()
    }
  }))

  instance.interceptors.response.use(
    (response) => {
      if (response && response.data) {
        return Promise.resolve(response)
      } else {
        return Promise.reject('response 不存在')
      }
    },
    (error) => {
      console.log('-- error --')
      console.log(error)
      console.log('-- error --')
      return Promise.resolve({
        data: {
          success: false,
          msg: typeof error === 'string' ? error : error.message
        }
      })
    }
  )
  return instance
}

// 基本返回数据格式
interface BaseResponse<T> {
  success: boolean
  data: T
  message?: string
}

// 基本 Ajax 格式
interface BaseAjax {
  get: <T>(url: string, config?: AxiosRequestConfig) => Promise<BaseResponse<T>>
  delete: <T>(
    url: string,
    config?: AxiosRequestConfig
  ) => Promise<BaseResponse<T>>
  head: <T>(
    url: string,
    config?: AxiosRequestConfig
  ) => Promise<BaseResponse<T>>
  options: <T>(
    url: string,
    config?: AxiosRequestConfig
  ) => Promise<BaseResponse<T>>
  post: <T, U>(
    url: string,
    data?: U,
    config?: object
  ) => Promise<BaseResponse<T>>
  put: <T, U>(
    url: string,
    data?: U,
    config?: object
  ) => Promise<BaseResponse<T>>
  patch: <T, U>(
    url: string,
    data?: U,
    config?: object
  ) => Promise<BaseResponse<T>>
}

// 获取一个 Ajax 实例
const GetAxios = () => {
  const instance: AxiosInstance = getAxiosInstance()
  const request = <T,>(
    config: AxiosRequestConfig
  ): Promise<BaseResponse<T>> => {
    return new Promise((resolve, reject) => {
      instance.request<BaseResponse<T>>(config).then((data) => {
        const __data = data.data
        if (__data.success) {
          resolve(__data)
        } else {
          console.log(__data.message)
          reject(__data)
        }
      })
    })
  }

  // Ajax 实体
  const Ajax: BaseAjax = {
    get: function <T>(
      url: string,
      config: AxiosRequestConfig = {}
    ): Promise<BaseResponse<T>> {
      return request<T>({
        method: 'GET',
        url: url,
        ...config
      })
    },
    delete: function <T>(
      url: string,
      config: AxiosRequestConfig = {}
    ): Promise<BaseResponse<T>> {
      return request<T>({
        method: 'DELETE',
        url: url,
        ...config
      })
    },
    head: function <T>(
      url: string,
      config: AxiosRequestConfig = {}
    ): Promise<BaseResponse<T>> {
      return request<T>({
        method: 'HEAD',
        url: url,
        ...config
      })
    },
    options: function <T>(
      url: string,
      config: AxiosRequestConfig = {}
    ): Promise<BaseResponse<T>> {
      return request<T>({
        method: 'OPTIONS',
        url: url,
        ...config
      })
    },
    post: function <T, U>(
      url: string,
      data: U,
      config: AxiosRequestConfig = {}
    ): Promise<BaseResponse<T>> {
      return request<T>({
        method: 'POST',
        url: url,
        data: data,
        ...config
      })
    },
    put: function <T, U>(
      url: string,
      data: U,
      config: AxiosRequestConfig = {}
    ): Promise<BaseResponse<T>> {
      return request<T>({
        method: 'PUT',
        url: url,
        data: data,
        ...config
      })
    },
    patch: function <T, U>(
      url: string,
      data: U,
      config: AxiosRequestConfig = {}
    ): Promise<BaseResponse<T>> {
      return request<T>({
        method: 'PATCH',
        url: url,
        data: data,
        ...config
      })
    }
  }

  return Ajax
}

export const Ajax: BaseAjax = GetAxios()

export default GetAxios
