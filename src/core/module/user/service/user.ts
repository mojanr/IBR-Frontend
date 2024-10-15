import { api, type ApiRequest } from "@/core/lib/api";

// get user
export const getUser = (request: ApiRequest) => {
  return api.get("/admin/user", {
    params: {
      ...request.pagination,
      ...request.filter
    }
  })
}

// get user select
export const getUserSelect = (request: ApiRequest<{ search?: string}>) => {
  return api.get("/global/data-user", {
    params: {
      search: request.filter?.search
    }
  })
}

// get user detail
export const getUserDetail = (userId: number) => {
  return api.get(`/admin/user/show/${userId}`)
}

// create user
export const createUser = (userData: any) => {
  return api.post("/admin/user/create", userData)
}

// edit user, get user information
export const editUser = (userId: number) => {
  return api.get(`/admin/user/edit/${userId}`)
}

// update user
export const updateUser = (userId: number, userData: any) => {
  return api.post(`/admin/user/update/${userId}`, userData)
}

// update user password
export const updateUserPassword = (userId: number, userData: any) => {
  return api.post(`/admin/user/change-password/${userId}`, userData)
}

// update user role
export const updateUserRole = (userId: number, roleData: any) => {
  return api.post(`/admin/user/role/${userId}`, roleData)
}
 
// active inactive user status
export const updateUserStatus = (userId: number, status: boolean) => {
  if (status) {
    return api.post(`/admin/user/status/${userId}`)
  }
  return api.post(`/admin/user/lock/${userId}`)
}


// get user approval
export const getUserApproval = (request: ApiRequest) => {
  return api.get("/admin/user/approval/dummy", {
    params: {
      ...request.pagination,
      ...request.filter
    }
  })
}

// approve user
export const approveUser = (tempUserId: number) => {
  return api.post(`/admin/user/approval/${tempUserId}`)
}

// reject user
export const rejectUser = (tempUserId: number) => {
  return api.post(`/admin/user/reject/${tempUserId}`)
}
