import type { FieldTextProps, TField } from "@/common/ui/type/field";
import { Form, Input } from "antd";
import { Controller } from "react-hook-form";
import { FormItem } from "react-hook-form-antd";

type FieldInputProps = {
  dedicatedControl?: boolean
}

const FieldInput = <Field extends TField>({ control, name, label, required, tooltip, dedicatedControl = true, ...props }: FieldTextProps<Field> & FieldInputProps) => {
  return (
    dedicatedControl ? (
      <FormItem control={control} name={name} label={label} required={required} tooltip={tooltip} hidden={props.hidden} className="flex-1">
        <Input {...props} />
      </FormItem>
    ) : (
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <Form.Item label={label} required={required} tooltip={tooltip} hidden={props.hidden} validateStatus={fieldState?.error?.message ? 'error' : undefined} help={fieldState?.error?.message ? fieldState?.error?.message : null} className="flex-1">
            <Input placeholder={props.placeholder} {...field} />
          </Form.Item>
        )}
      />
    )
  );
}

export default FieldInput;