import { useQuery } from "@tanstack/react-query"
import { getLicense } from "../service/license"

// get license
export const useGetLicense = (enabled?: boolean) => {
  return useQuery({
    queryKey: ["license-get"],
    queryFn: () => getLicense(),
    // placeholderData: keepPreviousData,
    enabled
  })
} 