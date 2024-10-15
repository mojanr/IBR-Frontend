import { AppApiError, AppApiResponse, AppApiResponseWithPagination } from "@/core/lib/api"
import { keepPreviousData, MutationOptions, useMutation, useQuery } from "@tanstack/react-query"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { batalEvent, createEvent, getEvent, getEventApproval, getEventDetail, updateEvent } from "../service/event"
import { Event } from "../type/event"

type Params = {
  pagination: {
    page: number | string
    limit: number | string
  },
  search: {
    nama_pertandingan: string | null | undefined
  },
  filter: {
    status: number | string | null | undefined
    tanggal: string | null | undefined
  }
}

type ParamsApproval = {
  pagination: {
    page: number | string
    limit: number | string
  },
  search: {
    nama_pertandingan: string | null | undefined
  },
  filter: {
    status: number | string | null | undefined
    tanggal: string | null | undefined
  }
}

// get event list
export const useTableIndexEvent = (enabled?: boolean) => {
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
      nama_pertandingan: queryParams.get("nama_pertandingan"),
    },
    filter: {
      status: queryParams.get("status"),
      tanggal: queryParams.get("tanggal")
    }
  }

  // change page
  const changePage = ({ page, limit }: typeof params.pagination) => {
    queryParams.set("page", `${page}`)
    queryParams.set("limit", `${limit}`)

    router.push(pathname + "?" + queryParams)
  }

  // change search
  const changeSearch = ({ nama_pertandingan }: typeof params.search) => {
    if (nama_pertandingan) {
      queryParams.set("username", `${nama_pertandingan}`)
    } else {
      queryParams.delete("username")
    }

    router.push(pathname + "?" + queryParams)
  }

  // change filter
  const changeFilter = ({ status, tanggal }: typeof params.filter) => {
    if (status != null || status != undefined) {
      queryParams.set("status", `${status}`)
    } else {
      queryParams.delete("status")
    }

    if (tanggal != null || tanggal != undefined) {
      queryParams.set("tanggal", `${tanggal}`)
    } else {
      queryParams.delete("tanggal")
    }

    router.push(pathname + "?" + queryParams)
  }

  const query = useQuery<AppApiResponseWithPagination<any>, AppApiError<any>>({
    queryKey: ["table-index-event", { ...params.pagination, ...params.search, ...params.filter }],
    queryFn: () => getEvent({
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

// use table index event approval
export const useTableIndexEventApproval = (enabled?: boolean) => {
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

  const params: ParamsApproval = {
    pagination: {
      page: queryParams.get("page") as string,
      limit: queryParams.get("limit") as string,
    },
    search: {
      nama_pertandingan: queryParams.get("nama_pertandingan"),
    },
    filter: {
      status: queryParams.get("status"),
      tanggal: queryParams.get("tanggal")
    }
  }

  // change page
  const changePage = ({ page, limit }: typeof params.pagination) => {
    queryParams.set("page", `${page}`)
    queryParams.set("limit", `${limit}`)

    router.push(pathname + "?" + queryParams)
  }

  // change search
  const changeSearch = ({ nama_pertandingan }: typeof params.search) => {
    if (nama_pertandingan) {
      queryParams.set("username", `${nama_pertandingan}`)
    } else {
      queryParams.delete("username")
    }

    router.push(pathname + "?" + queryParams)
  }

  // change filter
  const changeFilter = ({ status, tanggal }: typeof params.filter) => {
    if (status != null || status != undefined) {
      queryParams.set("status", `${status}`)
    } else {
      queryParams.delete("status")
    }

    if (tanggal != null || tanggal != undefined) {
      queryParams.set("tanggal", `${tanggal}`)
    } else {
      queryParams.delete("tanggal")
    }

    router.push(pathname + "?" + queryParams)
  }

  const query = useQuery<AppApiResponseWithPagination<any>, AppApiError<any>>({
    queryKey: ["table-index-event-approval", { ...params.pagination, ...params.search, ...params.filter }],
    queryFn: () => getEventApproval({
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

// get event detail
export const useDetailEvent = (eventId: number, enabled?: boolean) => {
  return useQuery<AppApiResponse<Partial<Event>>, AppApiError<any>>({
    queryKey: ["event-detail", eventId],
    queryFn: () => getEventDetail(eventId),
    enabled
  })
}

// create event
export const useCreateEvent = (options?: MutationOptions) => {
  return useMutation<AppApiResponse<any>, AppApiError<any>>({
    mutationFn: (eventData: any) => createEvent(eventData),
    onSuccess: options?.onSuccess,
    onError: options?.onError
  })
}

// update event
export const useUpdateEvent = (eventId: number, options?: MutationOptions) => {
  return useMutation<AppApiResponse<any>, AppApiError<any>>({
    mutationFn: (eventData: any) => updateEvent(eventId, eventData),
    onSuccess: options?.onSuccess,
    onError: options?.onError
  })
}

// update batal event
export const useBatalEvent = (eventId: number, options?: MutationOptions) => {
  return useMutation<AppApiResponse<any>, AppApiError<any>>({
    mutationFn: (eventData: any) => batalEvent(eventId, eventData),
    onSuccess: options?.onSuccess,
    onError: options?.onError
  })
}

// update approve event
export const useApproveEvent = (eventId: number, options?: MutationOptions) => {
  return useMutation<AppApiResponse<any>, AppApiError<any>>({
    mutationFn: (eventData: any) => batalEvent(eventId, eventData),
    onSuccess: options?.onSuccess,
    onError: options?.onError
  })
}
