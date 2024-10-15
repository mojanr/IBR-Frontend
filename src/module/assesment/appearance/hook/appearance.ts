import { AppApiError, AppApiResponse, AppApiResponseWithPagination } from "@/core/lib/api"
import { keepPreviousData, MutationOptions, useMutation, useQuery } from "@tanstack/react-query"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { createAppearance, getAppearance, updateAppearance } from "../service/appearance"

type Params = {
  pagination: {
    page: number | string,
    limit: number | string,
  },
  search: {
    nama: string | null | undefined,
    parent: string | null | undefined
  },
  filter: {
    level: number | string | null | undefined
  }
}

// get appearance
export const useTableIndexAppearance = (enabled?: boolean) => {
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
    queryParams.set("limit", `${200}`)
  }

  const params: Params = {
    pagination: {
      page: queryParams.get("page") as string,
      limit: queryParams.get("limit") as string,
    },
    search: {
      nama: queryParams.get("nama"),
      parent: queryParams.get("parent"),
    },
    filter: {
      level: queryParams.get("level")
    }
  }

  // change page
  const changePage = ({ page, limit }: typeof params.pagination) => {
    queryParams.set("page", `${page}`)
    queryParams.set("limit", `${limit}`)

    router.push(pathname + "?" + queryParams)
  }

  // change search
  const changeSearch = ({ nama, parent }: typeof params.search) => {
    if (nama) {
      queryParams.set("nama", `${nama}`)
    } else {
      queryParams.delete("nama")
    }

    if (parent) {
      queryParams.set("parent", `${parent}`)
    } else {
      queryParams.delete("parent")
    }

    router.push(pathname + "?" + queryParams)
  }

  // change filter
  const changeFilter = ({ level }: typeof params.filter) => {
    if (level != null || level != undefined) {
      queryParams.set("level", `${level}`)
    } else {
      queryParams.delete("level")
    }

    router.push(pathname + "?" + queryParams)
  }

  const query = useQuery<AppApiResponseWithPagination<any>, AppApiError<any>>({
    queryKey: ["table-index-appearance", { ...params.pagination, ...params.search, ...params.filter }],
    queryFn: () => getAppearance({
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

// create apperarance
export const useCreateAppearance = (options?: MutationOptions) => {
  return useMutation<AppApiResponse<any>, AppApiError<any>>({
    mutationFn: (appearanceData: any) => createAppearance(appearanceData),
    onSuccess: options?.onSuccess,
    onError: options?.onError
  })
}

// update appearance
export const useUpdateAppearance = (appearanceId: number, options?: MutationOptions) => {
  return useMutation<AppApiResponse<any>, AppApiError<any>>({
    mutationFn: (appearanceData: any) => updateAppearance(appearanceId, appearanceData),
    onSuccess: options?.onSuccess,
    onError: options?.onError
  })
}