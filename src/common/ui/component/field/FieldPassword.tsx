import type { FieldPasswordProps, TField } from "@/common/ui/type/field";
import { Input } from "antd";
import { FormItem } from "react-hook-form-antd";

const FieldPassword = <Field extends TField>({ control, name, label, required, tooltip, ...props }: FieldPasswordProps<Field>) => {
  return (
    <FormItem control={control} name={name} label={label} required={required} tooltip={tooltip} hidden={props.hidden}>
      <Input.Password {...props} />
    </FormItem>
  );
}

export default FieldPassword;