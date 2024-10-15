"use client"

import { useController } from "react-hook-form";
import type { FieldDatePickerProps, TField } from "../../type/field";
import { DatePicker, type DatePickerProps } from "antd";
import { FormItem } from "react-hook-form-antd";
import dayjs from "dayjs";

const FieldDate = <Field extends TField>({ control, name, label, required, tooltip, placeholder = "", ...props }: FieldDatePickerProps<Field>) => {

  const { field: { onChange, value } } = useController({ control, name })

  const onChangeDate: DatePickerProps['onChange'] = (data, dateString) => {
    onChange(`${dateString}`)
  }

  // console.log(props.defaultValue, value)

  return (
    <FormItem control={control} name={name} label={label} required={required} tooltip={tooltip} hidden={props.hidden}>
      <div>
        <DatePicker {...props} defaultValue={value ? dayjs(value || undefined) : null} value={props.value} onChange={onChangeDate} placeholder={placeholder} className="w-full" />
      </div>
    </FormItem>
  );
}

export default FieldDate;