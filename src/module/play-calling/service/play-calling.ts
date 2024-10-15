import { api, ApiRequest } from "@/core/lib/api"

export const getPlayCalling = (request: ApiRequest) => {
  return api.get("/transaksi/t-play-calling/index", {
    params: {
      ...request.pagination,
      ...request.filter
    }
  })
}