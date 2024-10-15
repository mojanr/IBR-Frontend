import { useQuery } from "@tanstack/react-query"
import { getCallAnalysis } from "../service/call-analysis"

// use get call analysis
export const useGetCallAnalysis = (enabled?: boolean) => {
  return useQuery({
    queryKey: ["call-analysis-get"],
    queryFn: () => getCallAnalysis(),
    // placeholderData: keepPreviousData,
    enabled
  })
}