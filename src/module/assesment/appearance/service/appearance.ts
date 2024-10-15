import { api, ApiRequest } from "@/core/lib/api";

export const getAppearance = (request: ApiRequest) => {
  return api.get("/master/appearance", {
    params: {
      ...request.pagination,
      ...request.filter
    }
  }) 
}

// detail appearance
export const getAppearanceDetail = (appearanceId: number) => {
  return api.get(`/master/appearance/show/${appearanceId}`)
}

// create appearance
export const createAppearance = (appearanceData: any) => {
  return api.post('master/appearance/create', appearanceData)
}

// edit appearance
export const editAppearance = (appearanceId: number) => {
  return api.get(`/master/appearance/edit/${appearanceId}`)
}

// update appearance
export const updateAppearance = (appearanceId: number, appearanceData: any) => {
  return api.post(`master/appearance/update/${appearanceId}`, appearanceData)
}

// delete appearance
export const deleteAppearance = (appearanceId: number) => {
  return api.post(`/master/appearance/delete/${appearanceId}`)
}