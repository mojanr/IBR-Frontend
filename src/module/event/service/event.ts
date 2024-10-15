import { api, ApiRequest } from "@/core/lib/api"

// get event
export const getEvent = (request: ApiRequest) => {
  return api.get("/transaksi/event", {
    params: {
      ...request.pagination,
      ...request.filter
    }
  })
}

// get event list approval
export const getEventApproval = (request: ApiRequest) => {
  return api.get(`/transaksi/event/list-approval`, {
    params: {
      ...request.pagination,
      ...request.filter
    }
  })
}

// get event detail
export const getEventDetail = (eventId: number) => {
  return api.get(`/transaksi/event/show/${eventId}`)
}

// create event
export const createEvent = (eventData: any) => {
  return api.post("/transaksi/event/create", eventData)
}

// update event
export const updateEvent = (eventId: number, eventData: any) => {
  return api.post(`/transaksi/event/edit/${eventId}`, eventData)
}

// update event batal
export const batalEvent = (eventId: number, eventData: any) => {
  return api.post(`/transaksi/event/batal/${eventId}`, eventData)
}

// update event approval
export const approveEvent = (eventId: number, eventData: any) => {
  return api.post(`/transaksi/event/approval/${eventId}`, eventData)
}