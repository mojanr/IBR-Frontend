"use client"

import FieldDate from "@/common/ui/component/field/FieldDate";
import FieldInput from "@/common/ui/component/field/FieldInput";
import FieldPassword from "@/common/ui/component/field/FieldPassword";
import FieldTextarea from "@/common/ui/component/field/FieldTextarea";
import Title from "@/common/ui/component/title/Title";
import { Button, Divider, Form, type GetProp, Image, Upload, type UploadFile, type UploadProps } from "antd";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { LuPlus } from "react-icons/lu";

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const FormProfile = () => {

  // form context
  const { control, handleSubmit } = useForm({
    mode: "all",
    reValidateMode: "onChange"
  })

  // on submit 
  const onSubmit = (formData: any) => {

  }


  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    // {
    //   uid: '-xxx',
    //   percent: 50,
    //   name: 'image.png',
    //   status: 'uploading',
    //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    // },
    // {
    //   uid: '-5',
    //   name: 'image.png',
    //   status: 'error',
    // },
  ]);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button" className="w-full flex flex-col items-center justify-center">
      {/* <div className="w-full flex items-center justify-end"> */}
      <LuPlus className="text-2xl" />
      {/* </div> */}
      <div style={{ marginTop: 2 }}>Upload</div>
    </button>
  );

  return (
    <div className="flex flex-col gap-y-5">
      {/* profile image */}
      <div className="flex flex-row">
        <div className="w-32 md:w-60">
          <Title decorator={false} className="text-base"> Profile Image </Title>
          <div className="text-subtle font-subtle"> Configure your profile picture </div>
        </div>
        <div className="flex-1">
          <Form layout="vertical" >
            <FieldInput control={control} name="image" label="Profile Image" placeholder="image" />

            <Form.Item>
              <Upload
                action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                listType="picture-circle"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
              >
                {fileList.length >= 8 ? null : uploadButton}
              </Upload>
              {previewImage && (
                <Image
                  wrapperStyle={{ display: 'none' }}
                  preview={{
                    visible: previewOpen,
                    onVisibleChange: (visible) => setPreviewOpen(visible),
                    afterOpenChange: (visible) => !visible && setPreviewImage(''),
                  }}
                  src={previewImage}
                />
              )}
            </Form.Item>

            <Button type="primary"> Submit </Button>
          </Form>
        </div>
      </div>

      <Divider className="mt-10 mb-0 border-[1.5px] border-slate-100" />

      {/* profile information */}
      <div className="flex flex-row">
        <div className="w-32 md:w-60">
          <Title decorator={false} className="text-base"> Information </Title>
          <div className="text-subtle font-subtle"> Configure your information </div>
        </div>
        <div className="flex-1">
          <Form layout="vertical" >
            <FieldInput control={control} name="email" label="Email" placeholder="Email" />
            <FieldInput control={control} name="tempatLahir" label="Tempat Lahir" placeholder="Tempat lahir" />
            <FieldDate control={control} name="tglLahir" label="Tanggal Lahir" placeholder="Tanggal lahir" />
            <FieldTextarea control={control} name="alamat" label="Alamat" placeholder="Alamat" />
            <Button type="primary"> Submit </Button>
          </Form>
        </div>
      </div>

      <Divider className="mt-10 mb-0 border-[1.5px] border-slate-100" />

      {/* profile license */}
      <div className="flex flex-row">
        <div className="w-32 md:w-60">
          <Title decorator={false} className="text-base"> License </Title>
          <div className="text-subtle font-subtle"> Configure your license </div>
        </div>
        <div className="flex-1">
          <Form layout="vertical" >
            <FieldInput control={control} name="idLisensi" label="ID Lisensi" placeholder="ID lisensi" />
            <FieldInput control={control} name="noLisensi" label="Nomor Lisensi" placeholder="Nomor lisensi" />
            <Button type="primary"> Submit </Button>
          </Form>
        </div>
      </div>

      <Divider className="mt-10 mb-0 border-[1.5px] border-slate-100" />

      {/* authentication password */}
      <div className="flex flex-row">
        <div className="w-32 md:w-60">
          <Title decorator={false} className="text-base"> Password </Title>
          <div className="text-subtle font-subtle"> Update your password </div>
        </div>
        <div className="flex-1">
          <Form layout="vertical" >
            <FieldPassword control={control} name="password" label="Password" placeholder="Password" />
            <FieldPassword control={control} name="confirmPassword" label="Confirm Password" placeholder="Confirm password" />
            <Button type="primary"> Submit </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default FormProfile;