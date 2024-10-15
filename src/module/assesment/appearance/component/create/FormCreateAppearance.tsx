import FieldInput from "@/common/ui/component/field/FieldInput";
import FieldSelect from "@/common/ui/component/field/FieldSelect";
import { Alert, Button, Form } from "antd";
import { useForm } from "react-hook-form";
import { useCreateAppearance } from "../../hook/appearance";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formCreateAppearanceSchema = z.object({
  nama: z
    .string({ required_error: "Nama indikator tidak boleh kosong" })
    .trim()
    .min(1, { message: "Nama indikator tidak boleh kosong" }),
  persentase: z
    .string({ message: "Persentase tidak boleh kosong" })
    .trim()
    .min(1, { message: "Persentase tidak boleh kosong" }),
})

export type FormCreateAppearanceSchemaType = z.infer<typeof formCreateAppearanceSchema>

type FormCreateAppearanceProps = {
  userId: string,
  idParentAppearance?: number,
  level: number
  order: number,
  onError?: (error: any) => void
  onSuccess?: (message: any) => void
}

const FormCreateAppearance = ({ userId, idParentAppearance, level, order, onError, onSuccess }: FormCreateAppearanceProps) => {

  // use create appearance
  const { mutate, isPending, isError, error } = useCreateAppearance()

  // form context
  const { control, handleSubmit } = useForm<any>({
    resolver: zodResolver(formCreateAppearanceSchema),
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: {
      persentase: level == 1 ? 100 : undefined
    }
  })

  // on submit
  const onSubmit = (formData: any) => {
    formData['user_id'] = userId
    formData['level'] = level
    formData['order_by'] = order
    idParentAppearance && (formData['id_m_appearance'] = idParentAppearance)
    // console.log(formData)
    mutate(formData as any, { onSuccess, onError })
  }

  return (
    <Form layout="vertical" onSubmitCapture={handleSubmit(onSubmit)}>
      <FieldInput control={control} name="nama" label="Indikator" disabled={isPending} />
      <FieldInput control={control} name="persentase" label="Persentase" disabled={isPending} hidden={level == 1} />

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
              {Array.isArray(error?.response?.data?.error) ? Object.values(error?.response?.data?.error).map((value: any, index) => <div key={index}> - {value[0]} </div>) : <div>{error?.response?.data?.error}</div>}
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

export default FormCreateAppearance;