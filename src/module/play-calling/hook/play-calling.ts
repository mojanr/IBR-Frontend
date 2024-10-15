import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { getPlayCalling } from "../service/play-calling"
import { AppApiError, AppApiResponse, AppApiResponseWithPagination } from "@/core/lib/api"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

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

export const useGetPlayCalling = (enabled?: boolean) => {
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
    queryFn: () => getPlayCalling({
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