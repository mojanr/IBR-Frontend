import FieldRole from "@/core/module/role/component/field/FieldRole";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert, Button, Form } from "antd";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useUpdateRoleUser } from "../../hook/user";

const formEditRoleUserSchema = z.object({
  role: z
    .number({ message: "Role tidak boleh kosong" })
    // .trim()
    // .min(1, { message: "Role tidak boleh kosong" })
})

type FormEditRoleUserSchemaType = z.infer<typeof formEditRoleUserSchema>

type FormEditRoleUserProps = {
  userId: number,
  onError?: (error: any) => void,
  onSuccess?: (message: any) => void
}

const FormEditRoleUser = ({ userId, onSuccess, onError }: FormEditRoleUserProps) => {

  // use update role
  const { mutate, isPending, isError, isSuccess, data, error } = useUpdateRoleUser(userId)

  // form context
  const { control, handleSubmit, reset } = useForm<FormEditRoleUserSchemaType>({
    resolver: zodResolver(formEditRoleUserSchema),
    mode: "all",
    reValidateMode: "onChange",
  })

  // on submit
  const onSubmit = (formData: FormEditRoleUserSchemaType) => {
    mutate(formData as any, { onSuccess, onError })
  }

  return (
    <Form layout="vertical" onSubmitCapture={handleSubmit(onSubmit)}>
      <FieldRole control={control} name="role" label="Role" />

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

export default FormEditRoleUser;