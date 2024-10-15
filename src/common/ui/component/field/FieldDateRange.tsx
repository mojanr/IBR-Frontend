"use client"

import { useController } from "react-hook-form";
import type { FieldDateRangePickerProps, TField } from "../../type/field";
import { DatePicker } from "antd";
import { FormItem } from "react-hook-form-antd";
import type { RangePickerProps } from "antd/es/date-picker";
import { dayjsToString } from "@/core/lib/util";

const { RangePicker } = DatePicker;

const FieldDateRange = <Field extends TField>({ control, name, label, required, tooltip, ...props }: FieldDateRangePickerProps<Field>) => {

  const { field: { onChange, value } } = useController({ control, name })

  const onChangeDate: RangePickerProps['onChange'] = (data, [startDate, endDate]) => {
    if (startDate == null || startDate == undefined || startDate == "") {
      onChange([undefined, undefined])
      return
    }
    onChange([dayjsToString(startDate), dayjsToString(endDate)])
  }

  return (
    <FormItem control={control} name={name} label={label} required={required} tooltip={tooltip} hidden={props.hidden}>
      <div>
        <RangePicker {...props} onChange={onChangeDate} className="w-full" />
      </div>
    </FormItem>
  );
}

export default FieldDateRange;