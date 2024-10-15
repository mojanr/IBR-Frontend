import { useQuery } from "@tanstack/react-query"
import { getIot } from "../service/iot"

export const useGetIot = (enabled?: boolean) => {
  return useQuery({
    queryKey: ["iot-get"],
    queryFn: () => getIot(),
    // placeholderData: keepPreviousData,
    enabled
  })
}