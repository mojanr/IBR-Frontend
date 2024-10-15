import { z } from "zod"

export const loginSchema = z.object({
  username: z
    .string({ required_error: "Username tidak boleh kosong" })
    .trim()
    .min(1, { message: "Username tidak boleh kosong" }),
  password: z
    .string({ required_error: "Password tidak boleh kosong" })
    .trim()
    .min(1, { message: "Password tidak boleh kosong" })
})

export type LoginSchemaType = z.infer<typeof loginSchema>