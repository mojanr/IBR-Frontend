import { api } from "@/core/lib/api"

export const getCallType = () => {
  return api.get("/global/data-call-type")
}