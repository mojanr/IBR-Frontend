import { api, ApiRequest } from "@/core/lib/api"

export const getRole = (request: ApiRequest) => {
  return api.get("/global/data-role", {
    params: {
      ...request.filter
    }
  })
}

// export const getRoleById = (roleId: number) => {
//   return api.get(`/admin/role/${roleId}`)
// }