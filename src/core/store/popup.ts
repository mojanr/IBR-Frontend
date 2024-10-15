import { create, createStore } from "zustand"

type Data<T> = {
  data?: T
}

type PopupState<T> = Data<T> & {
  isOpen?: boolean
}

type PopupStore<T> = PopupState<T> & {
  open: (data?: T) => void
  setData: (data: T) => void
  close: () => void
}

type CreatePopupProps<T> = Partial<PopupState<T>>

// popup store
export const createPopup = <T>({ isOpen = false, data = undefined }: CreatePopupProps<T> = {}) => {
  return create<PopupStore<T>>()((set) => ({
    isOpen: isOpen,
    data: data,
    open: (data) => set({ isOpen: true, data: data }),
    setData: (data) => set({ data: data }),
    close: () => set({ isOpen: false, data: undefined })
  }))
}

// popup with context
export const createPopupContext = <T>({ isOpen = false, data = undefined }: CreatePopupProps<T> = {}) => {
  return createStore<PopupStore<T>>()((set) => ({
    isOpen: isOpen,
    data: data,
    open: (data) => set({ isOpen: true, data: data }),
    setData: (data) => set({ data: data }),
    close: () => set({ isOpen: false, data: undefined })
  }))
}