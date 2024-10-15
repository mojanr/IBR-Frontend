import { FILE_ACCEPTED_IMAGE_TYPES, FILE_MAX_SIZE } from "@/core/config/file"
import { z } from "zod"

export const formRegisterStep1Schema = z.object({
  username: z
    .string({ required_error: "Username tidak boleh kosong" })
    .trim()
    .min(1, { message: "Username tidak boleh kosong" }),
  email: z
    .string({ required_error: "Email tidak boleh kosong" })
    .trim()
    .min(1, { message: "Email tidak boleh kosong" })
    .max(255, { message: "Maksimal 255 karakter" })
    .email({ message: "Format email tidak valid" }),
  password: z
    .string({ message: "Password tidak boleh kosong" })
    .trim()
    .min(14, { message: "Password minimal 14 karakter" })
    .max(255, { message: "Maksimal 255 karakter" }),
  confirmPassword: z
    .string({ message: "Confirm password tidak boleh kosong" })
    .trim()
    .min(14, { message: "Confirm password minimal 14 karakter" })
    .max(255, { message: "Maksimal 255 karakter" }),
})
  .refine(data => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Confirm password tidak sesuai",
  })

export const formRegisterStep2Schema = z.object({
  nama: z
    .string({ required_error: "Nama tidak boleh kosong" })
    .trim()
    .min(1, { message: "Nama tidak boleh kosong" })
    .max(255, { message: "Maksimal 255 karakter" }),
  tempat_lahir: z
    .string({ required_error: "Tempat lahir tidak boleh kosong" })
    .trim()
    .min(1, { message: "Tempat lahir tidak boleh kosong" })
    .max(50, { message: "Maksimal 50 karakter" }),
  tanggal_lahir: z
    .string({ required_error: "Tanggal lahir tidak boleh kosong" })
    .trim()
    .min(1, { message: "Tanggal lahir tidak boleh kosong" })
    .max(50, { message: "Maksimal 50 karakter" }),
  // .nullable(),
  alamat: z
    .string({ required_error: "Alamat tidak boleh kosong" })
    .trim()
    .min(1, { message: "Alamat tidak boleh kosong" }),
})

export const formRegisterStep3Schema = z.object({
  no_lisensi: z
    .string({ required_error: "Nomor lisensi tidak boleh kosong" })
    .trim()
    .min(1, { message: "Nomor lisensi tidak boleh kosong" })
    .max(50, { message: "Maksimal 50 karakter" }),
  id_m_lisensi: z
    // .string()
    // .default("1"),
    .string({ required_error: "ID lisensi tidak boleh kosong" })
    .trim()
    .min(1, { message: "ID lisensi tidak boleh kosong" })
    .max(10, { message: "Maksimal 10 karakter" }),
  file_photo: z
    .any()
    .refine((files) => files?.length == 1, "Photo tidak boleh kosong")
    .refine((files) => files && (files[0]?.size <= FILE_MAX_SIZE), `Max file size 5MB.`)
    .refine(
      (files) => files && FILE_ACCEPTED_IMAGE_TYPES.includes(files[0]?.type),
      "Photo harus dalam format .jpg, .jpeg, .png atau .webp"
    ),
})

export type FormRegisterStep1SchemaType = z.infer<typeof formRegisterStep1Schema>
export type FormRegisterStep2SchemaType = z.infer<typeof formRegisterStep2Schema>
export type FormRegisterStep3SchemaType = z.infer<typeof formRegisterStep3Schema>
export type FormRegisterSchemaType = FormRegisterStep1SchemaType & FormRegisterStep2SchemaType & FormRegisterStep3SchemaType
