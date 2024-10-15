"use client"

import FieldInput from "@/common/ui/component/field/FieldInput";
import FieldPassword from "@/common/ui/component/field/FieldPassword";
import { Alert, Button, Form } from "antd";
import { useForm } from "react-hook-form";
import { login } from "../../action/login";
import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";

const FormLogin = () => {

  // use parameter
  // const queryParams = useSearchParams()
  // const error = queryParams.get("error")
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  // form context
  const { control } = useForm({
    mode: "all",
    reValidateMode: "onChange"
  })

  const onSubmit = (formData: any) => {
    startTransition(async () => {
      login(formData)
    })
  }

  // on change
  const onChange = () => {
    // if (error) {
      // clear error
      router.push("/")
    // }
  }

  return (
    <Form layout="vertical" onChangeCapture={onChange} onFinish={onSubmit}>
      <FieldInput control={control} name="username" placeholder="Username" disabled={isPending} />
      <FieldPassword control={control} name="password" placeholder="Password" disabled={isPending} />
      <Form.Item>
        <Button type="primary" htmlType="submit" block loading={isPending}> Login </Button>
      </Form.Item>


    </Form>
  );
}

export default FormLogin;