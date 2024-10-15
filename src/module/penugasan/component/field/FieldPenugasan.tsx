import type { FieldSelectProps, TField } from "@/common/ui/type/field";
import { Empty, Form, Select } from "antd";
import { useGetPenugasan } from "../../hook/penugasan";
import type { DefaultOptionType } from "antd/es/select";
import { Controller } from "react-hook-form";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const FieldPenugasan = <Field extends TField>({ control, name, label, required, tooltip, ...props }: FieldSelectProps<Field>) => {

  // use select penugasan
  const {
    query: { isLoading, isFetching, isError, error, data },
    changeSearch
  } = useGetPenugasan(true)

  // on search
  const filterOption = (input: string, option?: DefaultOptionType) => ((option?.nama_tugas ?? '') as string).toLowerCase().includes(input.toLowerCase())

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Form.Item label={label} required={required} tooltip={tooltip} hidden={props.hidden} validateStatus={fieldState?.error?.message ? 'error' : undefined} help={fieldState?.error?.message ? fieldState?.error?.message : null} className="flex-1">
          <Select
            showSearch
            allowClear
            placeholder={props.placeholder}
            // defaultValue={{ value:  }}
            // optionFilterProp="children"
            filterOption={filterOption}
            // onChange={onChange}
            loading={isLoading || isFetching}
            // onSearch={onSearch}
            notFoundContent={
              isLoading || isFetching ?
                <AiOutlineLoading3Quarters className="animate-spin text-4xl mx-auto" />
                :
                <Empty description="Data tidak ditemukan, lakukan pencarian!" />
            }
            fieldNames={{
              label: "nama_tugas",
              value: "id"
            }}
            options={data?.data?.data}
            {...field}
          />
        </Form.Item>
      )}
    />
  );
}

export default FieldPenugasan;