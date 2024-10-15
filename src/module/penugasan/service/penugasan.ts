import { api, ApiRequest } from "@/core/lib/api"

export const getPenugasanSelect = (request: ApiRequest<{ search?: string }>) => {
  return api.get("/global/data-jenis-tugas", {
    params: {
      search: request.filter?.search
    }
  })
}