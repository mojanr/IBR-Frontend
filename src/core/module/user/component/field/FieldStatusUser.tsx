import type { FieldSelectProps, TField } from "@/common/ui/type/field";
import { type DefaultOptionType } from "antd/es/select";
import { FormItem } from "react-hook-form-antd";
import { Select } from "antd"
import { useController } from "react-hook-form";

const FieldStatusUser = <Field extends TField>({ control, name, label, required, tooltip, defaultValue, initialValue, ...props }: FieldSelectProps<Field>) => {

  const filterOption = (input: string, option?: DefaultOptionType) => ((option?.label ?? '') as string).toLowerCase().includes(input.toLowerCase())

  return (
    <FormItem control={control} name={name} label={label} required={required} tooltip={tooltip} hidden={props.hidden}>
      {/* <div> */}
        <Select
          showSearch
          // defaultValue={{ value:  }}
          optionFilterProp="children"
          filterOption={filterOption}
          // onChange={onChange}
          options={[
            {
              label: "Active",
              value: "1",
            },
            {
              label: "Inactive",
              value: "2",
            },
          ]}
        // {...props}
        />
      {/* </div> */}
    </FormItem>
  );
}

export default FieldStatusUser;