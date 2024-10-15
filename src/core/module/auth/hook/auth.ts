import { useMutation } from "@tanstack/react-query"
import { register } from "../service/auth"
import { ApiResponse, AppApiError, AppApiResponse } from "@/core/lib/api"

export const useRegister = () => {
  return useMutation<AppApiResponse<any>, AppApiError<any>, any, any>({
    mutationFn: (registerData: any) => register(registerData)
  })
}