import { Input } from "antd";
import { FormItem } from "react-hook-form-antd";
import type { FieldTextareaProps, TField } from "../../type/field";

const FieldTextarea = <Field extends TField>({ control, name, label, required, tooltip, rows = 4, ...props }: FieldTextareaProps<Field>) => {
  return (
    <FormItem control={control} name={name} label={label} required={required} tooltip={tooltip} hidden={props.hidden}>
      <Input.TextArea rows={rows} {...props} />
    </FormItem>
  );
}

export default FieldTextarea;