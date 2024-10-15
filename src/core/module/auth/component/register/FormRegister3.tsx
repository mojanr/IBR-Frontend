"use client"

import FieldInput from "@/common/ui/component/field/FieldInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert, Button, Form } from "antd";
import { useForm } from "react-hook-form";
import { formRegisterStep3Schema, FormRegisterStep3SchemaType } from "../../schema/register";
import FieldUpload from "@/common/ui/component/field/FieldUpload";
import { useRegister } from "../../hook/auth";
import { useFormRegister } from "./FormRegister";

type FormRegister3Props = {
  mutate: any,
  isPending: boolean
}

const FormRegister3 = ({ mutate, isPending }: FormRegister3Props) => {

  // use form register 
  const { data: registerData, updateData, clear } = useFormRegister()

  // form context
  const { control, handleSubmit, reset } = useForm<FormRegisterStep3SchemaType>({
    resolver: zodResolver(formRegisterStep3Schema),
    mode: "all",
    reValidateMode: "onChange",
  })

  // on handle validation
  // const onHandleValidation = (formData: any) => { }

  // on submit
  const onSubmit = (formData: any) => {
    updateData({ formData })

    const mergedData = {
      ...registerData?.formData,
      ...formData
    }

    const normalizedFormData = new FormData()

    for (const key in mergedData) {
      if (Object.prototype.hasOwnProperty.call(mergedData, key)) {
        const element = mergedData[key];
        if (key === "file_photo") {
          console.log("file photo", element)
          normalizedFormData.append(key, element[0].originFileObj)
        } else {
          normalizedFormData.append(key, element)
        }
      }
    }
    mutate(normalizedFormData, {
      onSuccess: () => {
        clear()
        reset()
      }
    })
  }

  return (
    <Form layout="vertical" onSubmitCapture={handleSubmit(onSubmit)}>
      <FieldInput control={control} name="no_lisensi" label="Nomor Lisensi" disabled={isPending} />
      <FieldInput control={control} name="id_m_lisensi" label="ID Lisensi" disabled={isPending} />
      {/* <FieldImageUpload control={control} name="file_photo" label="Foto" disabled={isPending} /> */}
      <FieldUpload control={control} name="file_photo" label="Foto" disabled={isPending} />

      <Form.Item>
        <Button type="primary" htmlType="submit" block loading={isPending}> Submit </Button>
      </Form.Item>

    </Form>
  );
}

export default FormRegister3;