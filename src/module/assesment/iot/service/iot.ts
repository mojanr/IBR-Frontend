import { api } from "@/core/lib/api"

export const getIot = () => {
  return api.get("/global/data-iot")
}