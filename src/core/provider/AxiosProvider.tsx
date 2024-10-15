"use client"

import { setDefault, setResponseInterceptor } from "../lib/api"
import { logout } from "../module/auth/action/logout"

type AxiosProviderProps = {
  token: string
  baseApiUrl: string
}

const AxiosProvider = ({ children, baseApiUrl, token }: React.PropsWithChildren<AxiosProviderProps>) => {

  // set default
  setDefault({ token, baseUrl: baseApiUrl })
  // set response interceptor
  setResponseInterceptor({
    onError: async (error) => {
      if (error.response?.status === 401) {
        await logout()
      }
    }
  })

  return (
    <>
      {children}
    </>
  );
}

export default AxiosProvider;