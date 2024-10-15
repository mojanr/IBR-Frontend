import { Upload, UploadProps } from "antd";
import type { FieldUploadProps, TField } from "../../type/field";
import { useController } from "react-hook-form";
import { FormItem } from "react-hook-form-antd";
import { LuUpload } from "react-icons/lu";

const { Dragger } = Upload

const FieldUpload = <Field extends TField>({ control, name, label, required, tooltip, fileList, ...props }: FieldUploadProps<Field>) => {

  const { field: { onChange, value } } = useController({ control, name })

  const onChangeDate: UploadProps['onChange'] = (files) => {
    onChange(files.fileList)
  }

  return (
    <FormItem control={control} name={name} label={label} required={required} tooltip={tooltip} hidden={props.hidden}>
      <div className="bg-slate">
        <Dragger {...props} name={name} onChange={onChangeDate} className="bg-transparent">
          <p className="flex items-center justify-center mb-2">
            <LuUpload className='text-2xl' />
          </p>
          <p className="text-center mb-3">Click or drag file to this area to upload</p>
          <p className="text-muted-foreground text-center">
            Support for a single or bulk upload. Strictly prohibited from uploading company data or other
            banned files.
          </p>
        </Dragger>
      </div>
    </FormItem>
  );
}

export default FieldUpload;