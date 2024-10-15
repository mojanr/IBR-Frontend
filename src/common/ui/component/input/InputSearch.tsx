import { Input } from "antd";
import { type ChangeEvent } from "react";
import { LuSearch } from "react-icons/lu";
import debounce from "lodash/debounce"
import { cn } from "@/core/lib/util";

type InputSearchProps = {
  wait?: number
  defaultValue?: string | null
  className?: string
  onChange: (value: string) => void
}

const InputSearch = ({ onChange, wait = 500, defaultValue, className }: InputSearchProps) => {

  // debounce change
  const onDebounceChange = (e: ChangeEvent<HTMLInputElement>) => { onChange(e.target.value) }
  // debounce handler
  const onDebounceChangeHandler = debounce(onDebounceChange, wait);

  return (
    <Input prefix={<LuSearch />} defaultValue={defaultValue ? defaultValue : undefined} placeholder="Cari data..." onChange={onDebounceChangeHandler} className={cn(className)} allowClear />
  );
}

export default InputSearch;