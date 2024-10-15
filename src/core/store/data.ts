import { create } from "zustand"
import merge from "lodash/merge"

type Data<T> = {
  data?: T
}

type DataStore<T> = Data<T> & {
  setData: (data: T) => void
  updateData: (data: T) => void
  clear: () => void
}

type CreateDataProps<T> = Partial<DataStore<T>>

// data store
export const createData = <T>({ data = undefined }: CreateDataProps<T> = {}) => {
  return create<DataStore<T>>()((set) => ({
    data: data,
    setData: (data) => set({ data }),
    updateData: (data) => set((prevData) => ({ data: merge(prevData.data, data) })),
    clear: () => set({ data: undefined })
  }))
}