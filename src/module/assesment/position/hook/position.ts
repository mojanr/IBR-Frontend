import { useQuery } from "@tanstack/react-query"
import { getPosition } from "../service/position"

export const useGetPosition = (enabled?: boolean) => {
  return useQuery({
    queryKey: ["position-get"],
    queryFn: () => getPosition(),
    // placeholderData: keepPreviousData,
    enabled
  })
}