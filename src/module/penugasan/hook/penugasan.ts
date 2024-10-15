import { useQuery } from "@tanstack/react-query"
import { getPenugasanSelect } from "../service/penugasan"
import { useState } from "react"

// get penugasan
export const useGetPenugasan = (enabled?: boolean) => {

  const [params, setParams] = useState<string | undefined>(undefined)

  const changeSearch = (value: string) => setParams(value)

  const query = useQuery({
    queryKey: ["select-penugasan",],
    queryFn: () => getPenugasanSelect({ filter: { search: params } }),
    // placeholderData: keepPreviousData,
    enabled: enabled || !!params
  })

  return {
    params,
    changeSearch,
    query
  }
}