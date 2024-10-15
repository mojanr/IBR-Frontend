import { useQuery } from "@tanstack/react-query"
import { getZoneBox } from "../service/zone-box"

export const useGetZoneBox = (enabled?: boolean) => {
  return useQuery({
    queryKey: ["zone-box-get"],
    queryFn: () => getZoneBox(),
    // placeholderData: keepPreviousData,
    enabled
  })
}