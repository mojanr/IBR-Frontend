import axios, { type AxiosError, type AxiosResponse, type CancelToken, type GenericAbortSignal } from "axios";

// abort request type
export type ApiAbortRequest = AbortController | AbortSignal | GenericAbortSignal | CancelToken | any

// api error as axios error
export type ApiError = AxiosError

// api response type
export type ApiResponse<T extends any = {}> = {
  code: string | number
  status?: string
  messages?: string
  message?: string
  data?: T
}

// api response with pagination type
export type ApiResponseWithPagiation<T extends any = {}> = ApiResponse<T> & {
  page: number
  totalPage: number
  prev: number
  next: number
  totalData: number
}

// api response error type
export type ApiResponseError<T extends any = {}> = {
  code: string | number
  status?: string
  messages?: string
  message?: string
  error?: T
}

// api request
export type ApiRequest<T extends any = {}> = {
  filter?: T,
  pagination?: {
    page: number | string
    limit: number | string
  }
}

// application api response
export type AppApiResponse<T> = AxiosResponse<ApiResponse<T>>
// application api response with pagination
export type AppApiResponseWithPagination<T> = AxiosResponse<ApiResponseWithPagiation<T>>
// application api error response
export type AppApiError<T> = AxiosError<ApiResponseError<T>>

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 5000, // Timeout if necessary
  headers: {
    'ContentType': 'application/json',
    // Add all custom headers here
  },
});

export const setToken = (token: string) => {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export const setBaseUrl = (baseUrl: string) => {
  api.defaults.baseURL = baseUrl
}

export const setDefault = ({ token, baseUrl }: { token: string, baseUrl: string }) => {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`
  api.defaults.baseURL = baseUrl
}

// request interceptor
export const setRequestInterceptor = () => {
  api.interceptors.request.use(async (config) => {
    return config
  }, (error) => {
    return Promise.reject(error)
  })
}

// response interceptor
export const setResponseInterceptor = ({ onError }: { onError: (error: AxiosError) => void }) => {
  api.interceptors.response.use(async (config) => {
    return config
  }, (error) => {
    onError(error)
    return Promise.reject(error)
  })
}
