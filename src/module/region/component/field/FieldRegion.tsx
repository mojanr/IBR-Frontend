import type { FieldSelectProps, TField } from "@/common/ui/type/field";
import { useGetRegion } from "../../hook/region";
import { FormItem } from "react-hook-form-antd";
import { Empty, Select } from "antd";
import type { DefaultOptionType } from "antd/es/select";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const FieldRegion = <Field extends TField>({ control, name, label, required, tooltip, ...props }: FieldSelectProps<Field>) => {

  // use query get region
  const { data, isLoading, isFetching, isError, error } = useGetRegion()

  const filterOption = (input: string, option?: DefaultOptionType) => ((option?.label ?? '') as string).toLowerCase().includes(input.toLowerCase())

  return (
    <FormItem control={control} name={name} label={label} required={required} tooltip={tooltip} hidden={props.hidden}>
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
        {...props}
      />
    </FormItem>
  );
}

export default FieldRegion;