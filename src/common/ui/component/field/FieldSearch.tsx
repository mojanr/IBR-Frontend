import { Input } from "antd";
import { FormItem } from "react-hook-form-antd";
import type { FieldTextProps, TField } from "../../type/field";
import { useController } from "react-hook-form";
import { type ChangeEvent } from "react";
import debounce from "lodash/debounce"
import { LuSearch } from "react-icons/lu";

type FieldSearchProps = {
  wait?: number
}

const FieldSearch = <Field extends TField>({ control, name, label, required, tooltip, wait = 400, ...props }: FieldTextProps<Field> & FieldSearchProps) => {

  // use controller
  const { field: { onChange } } = useController({ control, name })
  // debounce change
  const onDebounceChange = (e: ChangeEvent<HTMLInputElement>) => { onChange(e.target.value) }
  // debounce handler
  const onDebounceChangeHandler = debounce(onDebounceChange, wait, { maxWait: 500 });

  return (
    <FormItem control={control} name={name} label={label} required={required} tooltip={tooltip} hidden={props.hidden}>
      <div>
        <Input {...props} prefix={<LuSearch />} onChange={onDebounceChangeHandler} />
      </div>
    </FormItem>
  );
}

export default FieldSearch;