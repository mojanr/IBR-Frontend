"use client"

import FieldDate from "@/common/ui/component/field/FieldDate";
import FieldImageUpload from "@/common/ui/component/field/FieldImageUpload";
import FieldInput from "@/common/ui/component/field/FieldInput";
import FieldPassword from "@/common/ui/component/field/FieldPassword";
import FieldTextarea from "@/common/ui/component/field/FieldTextarea";
import Title from "@/common/ui/component/title/Title";
import { FILE_ACCEPTED_IMAGE_TYPES, FILE_MAX_SIZE } from "@/core/config/file";
import { getBase64 } from "@/core/lib/util";
import FieldRole from "@/core/module/role/component/field/FieldRole";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert, App, Button, Divider, Form, GetProp, Image, Upload, UploadFile, UploadProps } from "antd";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { LuPlus } from "react-icons/lu";
import { z } from "zod";
import { useCreateUser } from "../../hook/user";

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const formCreateUserSchema = z.object({
  username: z
    .string({ required_error: "Username tidak boleh kosong" })
    .trim()
    .min(1, { message: "Username tidak boleh kosong" }),
  user_id: z
    .string({ required_error: "User ID tidak boleh kosong" })
    .trim()
    .min(1, { message: "User ID tidak boleh kosong" }),
  nama: z
    .string({ required_error: "Nama tidak boleh kosong" })
    .trim()
    .min(1, { message: "Nama tidak boleh kosong" })
    .max(255, { message: "Maksimal 255 karakter" }),
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
  role: z
    .number({ message: "Role tidak boleh kosong" }),
  // .trim()
  // .min(1, { message: "Role tidak boleh kosong" })
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
    .refine((file) => file != null, "Photo tidak boleh kosong")
    .refine((file) => file && (file.size <= FILE_MAX_SIZE), `Max file size 5MB.`)
    .refine(
      (file) => file && FILE_ACCEPTED_IMAGE_TYPES.includes(file.type),
      "Photo harus dalam format .jpg, .jpeg, .png atau .webp"
    ),
})
  .refine(data => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Confirm password tidak sesuai",
  })

export type FormCreateUserSchemaType = z.infer<typeof formCreateUserSchema>

const FormCreateUser = () => {

  // use notification
  const { notification } = App.useApp()

  // use create user
  const { mutate, isPending, isError, error } = useCreateUser()

  // form context
  const { control, handleSubmit, reset } = useForm({
    resolver: zodResolver(formCreateUserSchema),
    mode: "all",
    reValidateMode: "onChange"
  })

  // on submit 
  const onSubmit = (formData: any) => {
    // console.log(formData)

    const form = new FormData()
    Object.keys(formData).map(key => {
      form.append(key, formData[key])
    })

    mutate(form as any, {
      onSuccess: () => {
        notification.success({
          message: "Berhasil membuat user"
        })
        reset({})
      },
      onError: () => {
        notification.error({
          message: "Gagal membuat user"
        })
      }
    })
  }

  return (
    <Form layout="vertical" onSubmitCapture={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-y-5">
        {/* profile image */}
        <div className="flex flex-row">
          <div className="w-32 md:w-60">
            <Title decorator={false} className="text-base"> Profile Image </Title>
            <div className="text-subtle font-subtle"> Configure your profile picture </div>
          </div>
          <div className="flex-1">
            <FieldImageUpload control={control} name="file_photo" label="Photo" disabled={isPending} />
          </div>
        </div>

        <Divider className="mt-10 mb-0 border-[1.5px] border-slate-100" />

        {/* role */}
        <div className="flex flex-row">
          <div className="w-32 md:w-60">
            <Title decorator={false} className="text-base"> Role </Title>
            <div className="text-subtle font-subtle"> Configure your role </div>
          </div>
          <div className="flex-1">
            <FieldRole control={control} name="role" label="Role" placeholder="Role" required disabled={isPending} />
          </div>
        </div>

        <Divider className="mt-10 mb-0 border-[1.5px] border-slate-100" />

        {/* profile information */}
        <div className="flex flex-row">
          <div className="w-32 md:w-60">
            <Title decorator={false} className="text-base"> Information </Title>
            <div className="text-subtle font-subtle"> Configure your information </div>
          </div>
          <div className="flex-1">
            <FieldInput control={control} name="user_id" label="user_id" placeholder="ID User" required disabled={isPending} />
            <FieldInput control={control} name="nama" label="Nama" placeholder="Nama" required disabled={isPending} />
            <FieldInput control={control} name="email" label="Email" placeholder="Email" required disabled={isPending} />
            <FieldInput control={control} name="tempat_lahir" label="Tempat Lahir" placeholder="Tempat lahir" required disabled={isPending} />
            <FieldDate control={control} name="tanggal_lahir" label="Tanggal Lahir" placeholder="Tanggal lahir" required disabled={isPending} />
            <FieldTextarea control={control} name="alamat" label="Alamat" placeholder="Alamat" required disabled={isPending} />
          </div>
        </div>

        <Divider className="mt-10 mb-0 border-[1.5px] border-slate-100" />

        {/* profile license */}
        <div className="flex flex-row">
          <div className="w-32 md:w-60">
            <Title decorator={false} className="text-base"> License </Title>
            <div className="text-subtle font-subtle"> Configure your license </div>
          </div>
          <div className="flex-1">
            <FieldInput control={control} name="id_m_lisensi" label="ID Lisensi" placeholder="ID lisensi" required disabled={isPending} />
            <FieldInput control={control} name="no_lisensi" label="Nomor Lisensi" placeholder="Nomor lisensi" required disabled={isPending} />
          </div>
        </div>

        <Divider className="mt-10 mb-0 border-[1.5px] border-slate-100" />

        {/* authentication */}
        <div className="flex flex-row">
          <div className="w-32 md:w-60">
            <Title decorator={false} className="text-base"> Account </Title>
            <div className="text-subtle font-subtle"> Update your account </div>
          </div>
          <div className="flex-1">
            <FieldInput control={control} name="username" label="Username" placeholder="Username" required disabled={isPending} />
            <FieldPassword control={control} name="password" label="Password" placeholder="Password" required disabled={isPending} />
            <FieldPassword control={control} name="confirmPassword" label="Confirm Password" placeholder="Confirm password" required disabled={isPending} />
          </div>
        </div>

        <div className="flex flex-row">
          <div className="w-32 md:w-60">
            {/* <Title decorator={false} className="text-base"> Password </Title>
            <div className="text-subtle font-subtle"> Update your password </div> */}
          </div>
          <div className="flex-1">
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={isPending}> Submit </Button>
            </Form.Item>
          </div>
        </div>
      </div>

      {/* error message */}
      {isError && (error.status == 400) && (
        <Form.Item>
          <Alert message={(
            <>
              {Object.values(error?.response?.data?.error).map((value: any, index) => <span key={index}> {value[0]} </span>)}
            </>
            // <pre>
            //   {JSON.stringify(error?.response?.data, null, 2)}
            // </pre>
          )} type="error" showIcon />
        </Form.Item>
      )}
    </Form>
  );
}

export default FormCreateUser;