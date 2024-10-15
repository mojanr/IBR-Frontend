import type { DatePickerProps, InputNumberProps, InputProps, SelectProps, GetProps, DatePicker, UploadProps, FormItemProps as AntdFormItemProps, RadioProps, RadioGroupProps } from "antd";
import type { TextAreaProps } from "antd/es/input";
import type { Control, FieldPath, FieldValues } from "react-hook-form";
import type { FormItemProps } from "react-hook-form-antd";


// field value type
export type TField = FieldValues

// controller type
export type FieldControllerProps<T extends TField = FieldValues> = {
  control: Control<T>
  name: FieldPath<T>
}

// controller any type
export type FieldControllerAnyProps = {
  control: any
  name: any
}

// field type
export type FieldProps<T extends FieldValues = FieldValues> = Omit<FormItemProps<T>, 'children'>
export type FieldArrayProps<T extends FieldValues = any> = FieldControllerAnyProps & AntdFormItemProps
export type FieldGenericProps<T extends FieldValues> = FieldControllerProps<T> & AntdFormItemProps

// field date picker type
type DateRangePickerProps = GetProps<typeof DatePicker.RangePicker>

// custom field type props
export type FieldTextProps<T extends TField> = FieldProps<T> & InputProps
export type FieldPasswordProps<T extends TField> = FieldProps<T> & InputProps
export type FieldTextareaProps<T extends TField> = FieldProps<T> & TextAreaProps
export type FieldSearchProps<T extends TField> = FieldProps<T> & InputProps
export type FieldSelectProps<T extends TField> = FieldProps<T> & SelectProps<T>
export type FieldInputNumberProps<T extends TField> = FieldProps<T> & InputNumberProps
export type FieldDatePickerProps<T extends TField> = FieldProps<T> & DatePickerProps
export type FieldDateRangePickerProps<T extends TField> = FieldProps<T> & DateRangePickerProps
export type FieldUploadProps<T extends TField> = FieldProps<T> & UploadProps<T>
export type FieldRadioProps<T extends TField> = FieldProps<T> & RadioProps
export type FieldRadioGroupProps<T extends TField> = FieldProps<T> & RadioGroupProps
export type FieldDataPickerProps<T extends TField> = {
  Controller: FieldControllerProps<T> & Pick<FieldSelectProps<T>, 'placeholder'> & { multiple: boolean },
  Field: Omit<FieldSelectProps<T>, 'mode'> & { multiple?: boolean }
  Item: {
    item: T,
    onClick?: (data?: any) => void
    onDelete?: (data?: any) => void
  }
}