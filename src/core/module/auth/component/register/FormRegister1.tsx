"use client"

import FieldInput from "@/common/ui/component/field/FieldInput";
import FieldPassword from "@/common/ui/component/field/FieldPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Form } from "antd";
import { useForm } from "react-hook-form";
import { useFormRegister } from "./FormRegister";
import { formRegisterStep1Schema, FormRegisterStep1SchemaType } from "../../schema/register";

const FormRegister1 = () => {

  // use form register
  const { data, updateData } = useFormRegister()

  // form context
  const { control, handleSubmit, reset } = useForm<FormRegisterStep1SchemaType>({
    resolver: zodResolver(formRegisterStep1Schema),
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: data?.formData
  })

  // on submit
  const onSubmit = (formData: any) => {
    updateData({ formData, current: 1 })
  }

  // console.log(data?.formData)

  return (
    <Form layout="vertical" onSubmitCapture={handleSubmit(onSubmit)}>
      <FieldInput control={control} name="username" label="Username" disabled={false} />
      {/* <FieldInput control={control} name="nama" label="Nama" disabled={false} /> */}
      <FieldInput control={control} name="email" label="Email" disabled={false} />
      <FieldPassword control={control} name="password" label="Password" disabled={false} />
      <FieldPassword control={control} name="confirmPassword" label="Confirm Password" disabled={false} />

      <Form.Item>
        <Button type="primary" htmlType="submit" block> Next </Button>
      </Form.Item>
    </Form>
  );
}

export default FormRegister1;