import { useQuery } from "@tanstack/react-query"
import { getCallType } from "../service/call-type"

// use get call type
export const useGetCallType = (enabled?: boolean) => {
  return useQuery({
    queryKey: ["call-type-get"],
    queryFn: () => getCallType(),
    // placeholderData: keepPreviousData,
    enabled
  })
}