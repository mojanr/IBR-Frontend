import { api } from "@/core/lib/api"

export const getPosition = () => {
  return api.get("/global/data-position")
}