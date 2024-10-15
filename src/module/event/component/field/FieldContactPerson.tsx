"use client"

import FieldInput from "@/common/ui/component/field/FieldInput";
import { FieldArrayProps, TField } from "@/common/ui/type/field";
import { Button, Form } from "antd";
import { useController, useFieldArray } from "react-hook-form";
import { LuMinus, LuPlus } from "react-icons/lu";

const FieldContactPerson = <Field extends TField>({ control, name, label, required, tooltip, ...props }: FieldArrayProps<Field>) => {

  const { fieldState } = useController({ control, name})
  const { fields, append, prepend, remove } = useFieldArray({ control, name })

  return (
    <Form.Item label={label} required={required} tooltip={tooltip} hidden={props.hidden} validateStatus={fieldState?.error?.message ? 'error' : undefined} help={fieldState?.error?.message ? fieldState?.error?.message : null} className="w-full">
      {fields.map((item: any, index) => (
        <div className="flex flex-row gap-x-3" key={item.id}>
          {/* <FieldUser control={control} name={`${name}[${index}].wasit`} placeholder="Wasit" required />
          <FieldPenugasan control={control} name={`${name}[${index}].penugasan`} placeholder="Penugasan" required /> */}
          <FieldInput control={control} name={`${name}[${index}].nama`} placeholder="Nama" dedicatedControl={false} />
          <FieldInput control={control} name={`${name}[${index}].telepon`} placeholder="Telepon" dedicatedControl={false} />

          <Form.Item>
            <div className="flex flex-row gap-x-3">
              {(fields.length - 1) === index ? (
                <Button icon={<LuPlus />} type="text" onClick={() => append({ wasit: undefined, penugasan: undefined }, { shouldFocus: true })} />
              ) : (
                <Button icon={<LuMinus />} type="text" onClick={() => remove(index)} />
              )}
            </div>
          </Form.Item>
        </div>
      ))}
    </Form.Item>
  );
}

export default FieldContactPerson;