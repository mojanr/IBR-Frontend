import { api } from "@/core/lib/api"

export const getZoneBox = () => {
  return api.get("/global/data-zone-box")
}