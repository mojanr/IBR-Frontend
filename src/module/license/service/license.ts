import { api } from "@/core/lib/api"

export const getLicense = () => {
  return api.get("/global/data-lisensi")
}

