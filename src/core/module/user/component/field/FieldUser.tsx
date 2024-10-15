"use client"

import type { FieldSelectProps, TField } from "@/common/ui/type/field";
import { Empty, Form, Select } from "antd";
import { useGetUserSelect } from "../../hook/user";
import debounce from 'lodash/debounce';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Controller } from "react-hook-form";

const FieldUser = <Field extends TField>({ control, name, label, required, tooltip, defaultValue, initialValue, ...props }: FieldSelectProps<Field>) => {

  // use select user
  const {
    query: { isLoading, isFetching, isError, error, data },
    changeSearch
  } = useGetUserSelect(false)


  // on search
  const onSearch = debounce((searchValue) => changeSearch(searchValue), 500)

  return (
    // <FormItem control={control} name={name} label={label} required={required} tooltip={tooltip} hidden={props.hidden}>
    // <Select
    //   showSearch
    //   // defaultValue={{ value:  }}
    //   // optionFilterProp="children"
    //   filterOption={false}
    //   // onChange={onChange}
    //   loading={isLoading || isFetching}
    //   onSearch={onSearch}
    //   notFoundContent={isLoading || isFetching ? <AiOutlineLoading3Quarters className="animate-spin text-4xl" /> : null}
    //   options={[
    //     {
    //       label: "Active",
    //       value: "1",
    //     },
    //     {
    //       label: "Inactive",
    //       value: "2",
    //     },
    //   ]}
    // />
    // </FormItem>
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Form.Item label={label} required={required} tooltip={tooltip} hidden={props.hidden} validateStatus={fieldState?.error?.message ? 'error' : undefined} help={fieldState?.error?.message ? fieldState?.error?.message : null} className="flex-1">
          <Select
            showSearch
            allowClear
            placeholder={props.placeholder}
            // defaultValue={{ value:  }}
            // optionFilterProp="children"
            filterOption={false}
            // onChange={onChange}
            loading={isLoading || isFetching}
            onSearch={onSearch}
            notFoundContent={
              isLoading || isFetching ?
                <AiOutlineLoading3Quarters className="animate-spin text-4xl mx-auto" />
                :
                <Empty description="Data tidak ditemukan, lakukan pencarian!" />
            }
            fieldNames={{
              label: "nama",
              value: "id"
            }}
            options={data?.data?.data}
            {...field}
          />
        </Form.Item>
      )}
    />
  );
}

export default FieldUser;