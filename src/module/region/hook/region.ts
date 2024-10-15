import { useQuery } from "@tanstack/react-query"
import { getRegion } from "../service/region"

// get region
export const useGetRegion = (enabled?: boolean) => {
  return useQuery({
    queryKey: ["region-get"],
    queryFn: () => getRegion(),
    // placeholderData: keepPreviousData,
    enabled
  })
}

// get region detail
export const useDetailRegion = () => {
  
}