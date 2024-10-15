import { keepPreviousData, MutationOptions, useMutation, useQuery } from "@tanstack/react-query"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { approveUser, createUser, editUser, getUser, getUserDetail, getUserSelect, rejectUser, updateUser, updateUserPassword, updateUserRole, updateUserStatus } from "../service/user"
import { AppApiResponseWithPagination, type AppApiError, type AppApiResponse } from "@/core/lib/api"
import type { UserInfo } from "../type/user"
import { useState } from "react"

type Params = {
  pagination: {
    page: number | string,
    limit: number | string,
  },
  search: {
    username: string | null | undefined,
    nama: string | null | undefined
  },
  filter: {
    status: number | string | null | undefined
  }
}

// get user
export const useTableIndexUser = (enabled?: boolean) => {
  // use search param
  const searchParams = useSearchParams()
  const queryParams = new URLSearchParams(searchParams)
  const router = useRouter()
  const pathname = usePathname()

  const page = searchParams.get("page")
  const limit = searchParams.get("limit")

  // default page
  if (page && limit) {
    queryParams.set("page", page)
    queryParams.set("limit", limit)
  } else {
    queryParams.set("page", `${1}`)
    queryParams.set("limit", `${10}`)
  }

  const params: Params = {
    pagination: {
      page: queryParams.get("page") as string,
      limit: queryParams.get("limit") as string,
    },
    search: {
      username: queryParams.get("username"),
      nama: queryParams.get("nama"),
    },
    filter: {
      status: queryParams.get("status")
    }
  }

  // change page
  const changePage = ({ page, limit }: typeof params.pagination) => {
    queryParams.set("page", `${page}`)
    queryParams.set("limit", `${limit}`)

    router.push(pathname + "?" + queryParams)
  }

  // change search
  const changeSearch = ({ username, nama }: typeof params.search) => {
    if (username) {
      queryParams.set("username", `${username}`)
    } else {
      queryParams.delete("username")
    }

    if (nama) {
      queryParams.set("nama", `${nama}`)
    } else {
      queryParams.delete("nama")
    }

    router.push(pathname + "?" + queryParams)
  }

  // change filter
  const changeFilter = ({ status }: typeof params.filter) => {
    if (status != null || status != undefined) {
      queryParams.set("status", `${status}`)
    } else {
      queryParams.delete("status")
    }

    router.push(pathname + "?" + queryParams)
  }

  const query = useQuery<AppApiResponseWithPagination<any>, AppApiError<any>>({
    queryKey: ["table-index-user", { ...params.pagination, ...params.search, ...params.filter }],
    queryFn: () => getUser({
      pagination: params.pagination,
      filter: {
        ...params.search,
        ...params.filter
      }
    }),
    placeholderData: keepPreviousData,
    enabled
  })

  return {
    params,
    changeSearch,
    changeFilter,
    changePage,
    query
  }
}

// get user select
export const useGetUserSelect = (enabled?: boolean) => {
  const [params, setParams] = useState<string | undefined>(undefined)

  const changeSearch = (value: string) => setParams(value)

  const query = useQuery<AppApiResponse<any>, AppApiError<any>>({
    queryKey: ["select-user", params],
    queryFn: () => getUserSelect({ filter: { search: params } }),
    // placeholderData: keepPreviousData,
    enabled: enabled || !!params
  })

  return {
    params,
    changeSearch,
    query
  }
}

// get detail user
export const useDetailUser = (userId: number, enabled?: boolean) => {
  return useQuery<AppApiResponse<UserInfo>, AppApiError<any>>({
    queryKey: ["user-detail", userId],
    queryFn: () => getUserDetail(userId),
    enabled
  })
}

// get user edit
export const useEditUser = (userId: number, enabled?: boolean) => {
  return useQuery<AppApiResponse<UserInfo>, AppApiError<any>>({
    queryKey: ["user-edit", userId],
    queryFn: () => editUser(userId),
    enabled
  })
}

// update user
export const useUpdateUser = (userId: number, options?: MutationOptions) => {
  return useMutation<AppApiResponse<any>, AppApiError<any>>({
    mutationFn: (userData: any) => updateUser(userId, userData),
    onSuccess: options?.onSuccess,
    onError: options?.onError
  })
}

// update password user
export const useUpdatePasswordUser = (userId: number, options?: MutationOptions) => {
  return useMutation<AppApiResponse<any>, AppApiError<any>>({
    mutationFn: (userData: any) => updateUserPassword(userId, userData),
    onSuccess: options?.onSuccess,
    onError: options?.onError
  })
}

// update role user
export const useUpdateRoleUser = (userId: number, options?: MutationOptions) => {
  return useMutation<AppApiResponse<any>, AppApiError<any>>({
    mutationFn: (userData: any) => updateUserRole(userId, userData),
    onSuccess: options?.onSuccess,
    onError: options?.onError
  })
}

// update status user
export const useUpdateStatusUser = (userId: number, options?: MutationOptions) => {
  return useMutation<AppApiResponse<any>, AppApiError<any>>({
    mutationFn: (userData: any) => updateUserStatus(userId, userData),
    onSuccess: options?.onSuccess,
    onError: options?.onError
  })
}

// export const useUser = (userId?: number, options?: { queryOptions?: QueryOptions, mutationOptions?: MutationOptions }) => {
//   return {
//     tableIndex: useTableIndexUser
//     get: useGetUser
//   }
// }


// user approval
// get user
export const useGetUserApproval = (enabled?: boolean) => {
  // use search param
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const page = searchParams.get("page")
  const limit = searchParams.get("limit")

  const params = {
    page: page && limit ? page : 1,
    limit: page && limit ? limit : 10
  }

  const changePage = (page: number, limit: number) => {
    const querySearch = new URLSearchParams({ page: `${page}`, limit: `${limit}` })
    router.push(pathname + "?" + querySearch)
  }

  const query = useQuery({
    queryKey: ["get-user-approval", { ...params }],
    queryFn: () => getUser({
      pagination: params
    }),
    placeholderData: keepPreviousData,
    enabled
  })

  return {
    params,
    changePage,
    query
  }
}

// create user
export const useCreateUser = (options?: MutationOptions) => {
  return useMutation<AppApiResponse<any>, AppApiError<any>>({
    mutationFn: (userData: any) => createUser(userData),
    onSuccess: options?.onSuccess,
    onError: options?.onError
  })
}

// approve user
export const useApproveUser = (tempUserId: number, options?: MutationOptions) => {
  return useMutation<AppApiResponse<any>, AppApiError<any>>({
    mutationFn: (userData: any) => approveUser(tempUserId),
    onSuccess: options?.onSuccess,
    onError: options?.onError
  })
}

// reject user
export const useRejectUser = (tempUserId: number, options?: MutationOptions) => {
  return useMutation<AppApiResponse<any>, AppApiError<any>>({
    mutationFn: (userData: any) => rejectUser(tempUserId),
    onSuccess: options?.onSuccess,
    onError: options?.onError
  })
}
