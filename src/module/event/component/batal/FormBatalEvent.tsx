"use client"

import FieldTextarea from "@/common/ui/component/field/FieldTextarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert, Button, Form } from "antd";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useBatalEvent } from "../../hook/event";

const formSchema = z.object({
  keterangan: z
    .string({ required_error: "Alasan pembatalan tidak boleh kosong" })
    .trim()
    .min(1, { message: "Alasan pembatalan tidak boleh ksong" })
})

type formSchemaType = z.infer<typeof formSchema>

type FormBatalEventProps = {
  eventId: number
  onError?: (error: any) => void
  onSuccess?: (message: any) => void
}

const FormBatalEvent = ({ eventId, onSuccess, onError }: FormBatalEventProps) => {

  // use batal event
  const { mutate, isPending, isError, isSuccess, data, error } = useBatalEvent(eventId)

  // form context
  const { control, handleSubmit } = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
    mode: "all",
    reValidateMode: "onChange"
  })

  // on submit 
  const onSubmit = (formData: any) => {
    mutate(formData as any, { onSuccess, onError })
  }

  return (
    <Form layout="vertical" onSubmitCapture={handleSubmit(onSubmit)}>
      <FieldTextarea control={control} name="keterangan" label="Alasan Pembatalan" required />
      <Button type="primary" htmlType="submit" block> Submit </Button>

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

export default FormBatalEvent;