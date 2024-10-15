"use client"

import FieldDate from "@/common/ui/component/field/FieldDate";
import FieldInput from "@/common/ui/component/field/FieldInput";
import FieldTextarea from "@/common/ui/component/field/FieldTextarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Form } from "antd";
import { useForm } from "react-hook-form";
import { useFormRegister } from "./FormRegister";
import { formRegisterStep2Schema, FormRegisterStep2SchemaType } from "../../schema/register";

const FormRegister2 = () => {

  // use form register
  const { data, updateData } = useFormRegister()

  // form context
  const { control, handleSubmit, reset } = useForm<FormRegisterStep2SchemaType>({
    resolver: zodResolver(formRegisterStep2Schema),
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: data?.formData
  })

  // on submit
  const onSubmit = (formData: any) => {
    updateData({ formData, current: 2 })
  }
  // console.log(data?.formData)

  return (
    <Form layout="vertical" onSubmitCapture={handleSubmit(onSubmit)}>
      <FieldInput control={control} name="nama" label="Nama Lengkap" disabled={false} />
      <FieldInput control={control} name="tempat_lahir" label="Tempat Lahir" disabled={false} />
      <FieldDate control={control} name="tanggal_lahir" label="Tanggal Lahir" disabled={false} allowClear />
      <FieldTextarea control={control} name="alamat" label="Alamat" disabled={false} />

      <Form.Item>
        <Button type="primary" htmlType="submit" block> Next </Button>
      </Form.Item>
    </Form>
  );
}

export default FormRegister2;