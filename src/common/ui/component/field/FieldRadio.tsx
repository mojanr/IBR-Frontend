import { FormItem } from "react-hook-form-antd";
import { FieldRadioGroupProps, TField } from "../../type/field";
import { Radio } from "antd";
import { cn } from "@/core/lib/util";

const FieldRadio = <Field extends TField>({ control, name, label, required, tooltip, className, ...props }: FieldRadioGroupProps<Field>) => {
  return (
    <FormItem control={control} name={name} label={label} required={required} tooltip={tooltip} hidden={props.hidden}>
      <Radio.Group className={cn(className)} {...props} />
    </FormItem>
  );
}

export default FieldRadio;