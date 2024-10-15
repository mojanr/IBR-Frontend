import { FormItem } from "react-hook-form-antd";
import type { FieldSelectProps, TField } from "../../type/field";
import { Select } from "antd";
import { type DefaultOptionType } from "antd/es/select";

const FieldSelect = <Field extends TField>({ control, name, label, required, tooltip, ...props }: FieldSelectProps<Field>) => {

  const filterOption = (input: string, option?: DefaultOptionType) => ((option?.label ?? '') as string).toLowerCase().includes(input.toLowerCase())

  return (
    <FormItem control={control} name={name} label={label} required={required} tooltip={tooltip} hidden={props.hidden}>
      <Select
        showSearch
        optionFilterProp="children"
        filterOption={filterOption}
        {...props}
      />
    </FormItem>
  );
}

export default FieldSelect;