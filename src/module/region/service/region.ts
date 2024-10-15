import { api } from "@/core/lib/api"

export const getRegion = () => {
  return api.get("/global/data-region")
}