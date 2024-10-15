
// authenticated user type
export type UserAuth = {
  username: string
  email: string
  nama: string
  no_lisensi: string
  tempat_lahir: string
  tanggal_lahir: string
  alamat: string
  file_photo: string
  role: string
}

// default user type
export type User = {
  id: number
  username: string
  nama: string
  email: string
  email_verified_at: string
  status: number
  role: number
  name: string
  created_at: string
  updated_at: string
}

// detail type
type UserDetail = {
  id: number
  users_id: number
  no_lisensi: string
  id_m_lisensi: number
  tempat_lahir: string
  tanggal_lahir: string
  alamat: string
  file_photo: string
  path_photo: string
  createdby: number
  created_on: string
  modifiedby: number
  modifiedon: string
}

// user detail type
export type UserInfo = {
  user: User,
  detail: UserDetail
}

// default user type who wait approval 
export type UserApproval = {
  id: string
  username: string
  name: string
  email: string
  password: string
  role: string
  no_licensi: string
  id_m_licensi: string
  tempat_lahir: string
  tanggal_lahir: string
  alamat: string
  file_photo: string
  status: boolean
}
