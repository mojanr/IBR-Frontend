import type { AppApiError, AppApiResponse } from "@/core/lib/api"
import { useQuery } from "@tanstack/react-query"
import { getRole, } from "../service/role"
import { useState } from "react"

// get role
export const useGetRole = (enabled?: boolean) => {

  const [params, setParams] = useState<string | undefined>(undefined)

  const changeSearch = (value: string) => setParams(value)

  const query = useQuery<AppApiResponse<any>, AppApiError<any>>({
    queryKey: ["role-get", params],
    queryFn: () => getRole({ filter: { search: params } }),
    enabled
  })

  return {
    params,
    changeSearch,
    query
  }
}

// // get role by id
// export const useGetRoleById = (roleId: number, enabled?: boolean) => {
//   return useQuery<AppApiResponse<any>, AppApiError<any>>({
//     queryKey: ["role-by-id", roleId],
//     queryFn: () => getRoleById(roleId),
//     enabled
//   })
// }

