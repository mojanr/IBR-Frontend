import FieldPassword from "@/common/ui/component/field/FieldPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert, Button, Form } from "antd";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useUpdatePasswordUser } from "../../hook/user";

const formEditPasswordUserSchema = z.object({
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

type FormEditPasswordUserSchemaType = z.infer<typeof formEditPasswordUserSchema>

type FormEditPasswordUserProps = {
  userId: number
  onError?: (error: any) => void
  onSuccess?: (message: any) => void
}

const FormEditPasswordUser = ({ userId, onSuccess, onError }: FormEditPasswordUserProps) => {

  // use update password user
  const { mutate, isPending, isError, isSuccess, data, error } = useUpdatePasswordUser(userId)

  // form context
  const { control, handleSubmit, reset } = useForm<FormEditPasswordUserSchemaType>({
    resolver: zodResolver(formEditPasswordUserSchema),
    mode: "all",
    reValidateMode: "onChange",
  })

  // on submit
  const onSubmit = (formData: FormEditPasswordUserSchemaType) => {
    mutate(formData as any, { onSuccess, onError })
  }

  return (
    <Form layout="vertical" onSubmitCapture={handleSubmit(onSubmit)}>
      <FieldPassword control={control} name="password" label="Password" disabled={isPending} />
      <FieldPassword control={control} name="confirmPassword" label="Confirm Password" disabled={isPending} />

      <Form.Item>
        <Button type="primary" htmlType="submit" block loading={isPending}> Submit </Button>
      </Form.Item>

      {/* error message */}
      {isError && (error.status == 500) && (
        <Form.Item>
          <Alert message="Oppss, terjadi kesalahan pada server!" type="error" showIcon />
        </Form.Item>
      )}

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

export default FormEditPasswordUser;