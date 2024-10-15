import { api } from "@/core/lib/api"

export const getCallAnalysis = () => {
  return api.get("/global/data-call-analysis")
}