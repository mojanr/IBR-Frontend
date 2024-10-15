"use client"

import { createData } from "@/core/store/data";
import { Alert, Form, Steps } from "antd";
import FormRegister1 from "./FormRegister1";
import FormRegister2 from "./FormRegister2";
import FormRegister3 from "./FormRegister3";
import { useRegister } from "../../hook/auth";

type UseFormRegisterProps = {
  current?: number
  formData?: any
}

export const useFormRegister = createData<UseFormRegisterProps>({ data: { current: 0 } })

// register step mapping
const RegisterMapping = (mutate: any, isPending: boolean, step?: number,) => {
  switch (step) {
    case 0:
      return <FormRegister1 />
      break;
    case 1:
      return <FormRegister2 />
      break;
    case 2:
      return <FormRegister3 mutate={mutate} isPending={isPending} />
      break;
    default:
      return <FormRegister1 />
      break;
  }
}

const FormRegister = () => {

  // use form register
  const { data, updateData } = useFormRegister()
  // use register
  const { mutate, isPending, isSuccess, isError, data: responseData, error } = useRegister()

  // on step change
  const onStepClick = (current: number) => {
    if (data?.current as number > current) {
      updateData({ current })
    }
  }

  return (
    <>
      <div>
        <Steps
          className="w-full md:-translate-x-5"
          progressDot
          direction="horizontal"
          responsive={false}
          onChange={onStepClick}
          current={data?.current}
          items={[
            {
              title: 'Step 1',
              // description: 'This is a description.',
            },
            {
              title: 'Step 2',
              // description: 'This is a description.',
            },
            {
              title: 'Step 3',
              // description: 'This is a description.',
            },
          ]}
        />
      </div>

      {RegisterMapping(mutate, isPending, data?.current)}

      {/* success menssage */}
      {isSuccess && (
        <Form.Item>
          <Alert message="Berhasil register akun" type="success" showIcon />
        </Form.Item>
      )}

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
    </>
  );
}

export default FormRegister;