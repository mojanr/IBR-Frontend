import FieldInput from "@/common/ui/component/field/FieldInput"
import { zodResolver } from "@hookform/resolvers/zod"
import { Alert, Button, Form } from "antd"
import { useForm } from "react-hook-form"
import { useUpdateAppearance } from "../../hook/appearance"
import { z } from "zod"

const formEditAppearanceSchema = z.object({
  nama: z
    .string({ required_error: "Nama indikator tidak boleh kosong" })
    .trim()
    .min(1, { message: "Nama indikator tidak boleh kosong" }),
  persentase: z
    .number({ message: "Persentase tidak boleh kosong" })
})

export type FormEditAppearanceSchemaType = z.infer<typeof formEditAppearanceSchema>

type FormEditAppearanceProps = {
  appearanceId: string | number,
  userId: string,
  id_m_appearance?: number,
  level: number
  order: number,
  onError?: (error: any) => void
  onSuccess?: (message: any) => void
}

const FormEditAppearance = ({ appearanceId, userId, id_m_appearance, level, order, onError, onSuccess }: FormEditAppearanceProps) => {

  // use create appearance
  const { mutate, isPending, isError, error } = useUpdateAppearance(appearanceId as number)

  // form context
  const { control, handleSubmit } = useForm<any>({
    resolver: zodResolver(formEditAppearanceSchema),
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
    id_m_appearance && (formData['id_m_appearance'] = id_m_appearance)
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

export default FormEditAppearance;