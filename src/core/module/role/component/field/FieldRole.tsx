import type { FieldSelectProps, TField } from "@/common/ui/type/field";
import { Empty, Form, Select } from "antd";
import { type DefaultOptionType } from "antd/es/select";
import { FormItem } from "react-hook-form-antd";
import { useGetRole } from "../../hook/role";
import debounce from "lodash/debounce";
import { Controller } from "react-hook-form";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const FieldRole = <Field extends TField>({ control, name, label, required, tooltip, ...props }: FieldSelectProps<Field>) => {

  // use get role
  // const {} = useGetRole()

  // filter role
  // const filterOption = (input: string, option?: DefaultOptionType) => ((option?.label ?? '') as string).toLowerCase().includes(input.toLowerCase())

  const {
    query: { isLoading, isFetching, isError, error, data },
    changeSearch
  } = useGetRole()

  // on search
  const onSearch = debounce((searchValue) => changeSearch(searchValue), 500)

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
            filterOption={false}
            // onChange={onChange}
            loading={isLoading || isFetching}
            onSearch={onSearch}
            notFoundContent={
              isLoading || isFetching ?
                <AiOutlineLoading3Quarters className="animate-spin text-4xl mx-auto" />
                :
                <Empty description="Data tidak ditemukan, lakukan pencarian!" />
            }
            fieldNames={{
              label: "name",
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

export default FieldRole;