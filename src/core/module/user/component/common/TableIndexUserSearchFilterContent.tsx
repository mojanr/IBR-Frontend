"use client"

import Title from "@/common/ui/component/title/Title";
import { Button, Form } from "antd";
import { useForm } from "react-hook-form";
import FieldStatusUser from "../field/FieldStatusUser";
import { useTableIndexUser } from "../../hook/user";

const TableIndexUserSearchFilterContent = () => {

  // use filter
  const { params, changeFilter } = useTableIndexUser(false)

  // form context
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      status: params?.filter?.status
    }
  })

  // on filter
  const onFilter = (filterData: any) => {
    changeFilter({ ...params, ...filterData, })
  }

  const onReset = () => {
    reset({ status: null })
    changeFilter({ status: null })
  }

  return (
    <div className="w-80">
      <Title className="mb-3"> Filter </Title>
      <Form layout="vertical" onSubmitCapture={handleSubmit(onFilter)} onResetCapture={onReset}>
        <FieldStatusUser control={control} name="status" label="Status" />
        <div className="flex flex-row gap-x-3">
          <Button type="primary" htmlType="submit" block> Apply </Button>
          <Button type="default" htmlType="reset" block> Reset </Button>
        </div>
      </Form>
    </div>
  );
}

export default TableIndexUserSearchFilterContent;