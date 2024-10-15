import { Upload, UploadProps } from "antd";
import type { FieldUploadProps, TField } from "../../type/field";
import { useController } from "react-hook-form";
import { FormItem } from "react-hook-form-antd";
import { LuPlus } from "react-icons/lu";
import { useState } from "react";
import { getBase64 } from "@/core/lib/util";

const uploadButton = (
  <button style={{ border: 0, background: 'none' }} type="button" className="w-full flex flex-col items-center justify-center">
    {/* <div className="w-full flex items-center justify-end"> */}
    <LuPlus className="text-2xl" />
    {/* </div> */}
    <div style={{ marginTop: 2 }}>Upload</div>
  </button>
);


const FieldImageUpload = <Field extends TField>({ control, name, label, required, tooltip, fileList, ...props }: FieldUploadProps<Field>) => {

  const { field: { onChange, value } } = useController({ control, name })
  const [imageUrl, setImageUrl] = useState<string>();

  // const beforeUpload = (file) => {

  // }

  const onChangeUpload: UploadProps['onChange'] = (info) => {
    // console.log(info.file.originFileObj)
    // let newFileList = [...info.fileList]
    // newFileList = newFileList.slice(-1)

    // newFileList = newFileList.map((file) => {
    //   if (file.response) {
    //     // Component will show file.url as link
    //     file.url = file.response.url;
    //   }
    //   return file;
    // });

    // console.log(info.fileList)
    getBase64(info.file.originFileObj as any).then((value) => {
      // console.log(value)
      onChange(info.file.originFileObj)
      setImageUrl(value)
    })
  }

  return (
    <FormItem control={control} name={name} label={label} required={required} tooltip={tooltip} hidden={props.hidden}>
      <div>
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          // className="bg-red-500"
          showUploadList={false}
          multiple={false}
          // action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
          // beforeUpload={beforeUpload}
          // fileList={}
          onChange={onChangeUpload}
        >
          {/* {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton} */}
          {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
        </Upload>
      </div>
    </FormItem >
  );
}

export default FieldImageUpload;