import { api } from "@/core/lib/api"

export const login = (username: string, password: string) => {
  return api.post("login", { username, password })
}

export const register = (registerData: any) => {
  return api.post("register", registerData)
}