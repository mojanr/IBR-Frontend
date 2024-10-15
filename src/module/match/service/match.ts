import { api, ApiRequest } from "@/core/lib/api";

export const getMatch = (eventId: number | string , request: ApiRequest) => {
  return api.get(`transaksi/match/match-list/${eventId}`, {
    params: {
      ...request?.pagination,
      ...request?.filter
    }
  })
}