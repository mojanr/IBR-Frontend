import FieldDate from "@/common/ui/component/field/FieldDate";
import FieldDateRange from "@/common/ui/component/field/FieldDateRange";
import FieldInput from "@/common/ui/component/field/FieldInput";
import FieldRadio from "@/common/ui/component/field/FieldRadio";
import FieldTextarea from "@/common/ui/component/field/FieldTextarea";
import { Button, Form, Radio } from "antd";
import { useForm } from "react-hook-form";
import { LuMinus, LuPlus } from "react-icons/lu";
import FieldParticipant from "../field/FieldParticipant";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FieldContactPerson from "../field/FieldContactPerson";
import FieldTembusan from "../field/FieldTembusan";

// const radioOptions = [
//   { label: 'Normal', value: 0, clas },
//   { label: 'Urgent', value: 1 },
// ];


const formSchema = z.object({
  nama_event: z
    .string({ required_error: "Nama event tidak boleh kosong" })
    .trim()
    .min(1, { message: "Wasit tidak boleh kosong" }),
  date: z.
    array(z
      .string({ required_error: "Tanggal mulai dan selesai tidak boleh kosong" })
      // .trim()
      // .min(1, { message: "Tanggal mulai dan selesai tidak boleh kosong" }),
    )
    .min(2, { message: "Tanggal mulai dan selesai tidak boleh kosong" }),
  // deskripsi: z
  //   .string({ required_error: "Nama event tidak boleh kosong" })
  //   .trim()
  //   .min(1, { message: "Wasit tidak boleh kosong" }),
  perihal: z
    .string({ required_error: "Nama tidak boleh kosong" })
    .trim()
    .min(1, { message: "Nama tidak boleh kosong" }),
  type: z.string({ required_error: "Tipe event tidak boleh kosong" }),
  participant: z.
    array(z.object({
      wasit: z.number({ required_error: "Wasit tidak boleh kosong" }),
      // .trim()
      // .min(1, { message: "Wasit tidak boleh kosong" }),
      penugasan: z.number({ required_error: "Penugasan tidak boleh kosong" })
      // .trim()
      // .min(1, { message: "Penugasan tidak boleh kosong" }),
    }))
    .min(3, { message: "Minimal 3 wasit yang ditugaskan" }),
  contact: z.
    array(z.object({
      nama: z
        .string({ required_error: "Nama tidak boleh kosong" })
        .trim()
        .min(1, { message: "Nama tidak boleh kosong" }),
      telepon: z
        .string({ required_error: "Telepon tidak boleh kosong" })
        .trim()
        .min(1, { message: "Telepon tidak boleh kosong" }),
    }))
    .min(3, { message: "Minimal 3 kontak person yang ditugaskan" }),
  tembusan: z.
    array(z.object({
      nama: z
        .string({ required_error: "Nama tidak boleh kosong" })
        .trim()
        .min(1, { message: "Nama tidak boleh kosong" }),
      email: z
        .string({ required_error: "Email tidak boleh kosong" })
        .trim()
        .min(1, { message: "Email tidak boleh kosong" })
        .email({ message: "Format email tidak valid" })
    })).min(1, { message: "Minimal 1 tembusan yang dikirim" }),
})

type formSchemaType = z.infer<typeof formSchema>

const FormCreateEvent = () => {

  // form context
  const { control, handleSubmit, register } = useForm({
    resolver: zodResolver(formSchema),
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: {
      nama_event: "",
      deskripsi: "",
      date: [],
      type: "1",
      perihal: "",
      participant: [{ wasit: undefined, penugasan: undefined }],
      contact: [{ nama: undefined, telepon: undefined }],
      tembusan: [{ nama: undefined, email: undefined }],
    }
  })

  // on submit
  const onSubmit = (formData: any) => {
    console.log(formData)
  }

  return (
    <Form layout="vertical" onSubmitCapture={handleSubmit(onSubmit)}>
      <FieldInput control={control} name="nama_event" label="Nama Event" required />
      <FieldTextarea control={control} name="deskripsi" label="Deskripsi" />
      <FieldDateRange control={control} name="date" label="Tanggal Event" required />
      <FieldRadio control={control} name="type" label="Event Type" optionType="button" className="radio-full" required options={[
        { label: "Normal", value: 0 },
        { label: "Urgent", value: 1 },
      ]} />

      <FieldTextarea control={control} name="perihal" label="Perihal" required />

      {/* field participant */}
      <FieldParticipant control={control} name="participant" label="Participant" required />
      {/* field contact person */}
      <FieldContactPerson control={control} name="contact" label="Contact Person" required />
      {/* field tembusan */}
      <FieldTembusan control={control} name="tembusan" label="Tembusan" />

      {/* <Form.Item label="Participant" required>
        <div className="flex flex-row gap-x-3">
          <FieldInput control={control} name="wasit" placeholder="wasit" required className="w-full flex-1" />
          <FieldInput control={control} name="wasit" placeholder="pengugasan" required className="w-full flex-1" />
          <Form.Item className="flex flex-row gap-x-3">
            <Button icon={<LuPlus />} type="text" />
            <Button icon={<LuMinus />} type="text" />
          </Form.Item>
        </div>
        <div className="flex flex-row gap-x-3">
          <FieldInput control={control} name="wasit" placeholder="wasit" className="flex-1" required />
          <FieldInput control={control} name="wasit" placeholder="pengugasan" className="flex-1" required />
          <Form.Item className="flex flex-row gap-x-3">
            <Button icon={<LuPlus />} type="text" />
            <Button icon={<LuMinus />} type="text" />
          </Form.Item>
        </div>
        <div className="flex flex-row gap-x-3">
          <FieldInput control={control} name="wasit" placeholder="wasit" required />
          <FieldInput control={control} name="wasit" placeholder="pengugasan" required />
          <Form.Item className="flex flex-row gap-x-3">
            <Button icon={<LuPlus />} type="text" />
            <Button icon={<LuMinus />} type="text" />
          </Form.Item>
        </div>
      </Form.Item>

      <Form.Item label="Contact Person" required>
        <div className="flex flex-row gap-x-3">
          <FieldInput control={control} name="wasit" placeholder="nama" required />
          <FieldInput control={control} name="wasit" placeholder="telepon" required />
          <Form.Item className="flex flex-row gap-x-3">
            <Button icon={<LuPlus />} type="text" />
            <Button icon={<LuMinus />} type="text" />
          </Form.Item>
        </div>
        <div className="flex flex-row gap-x-3">
          <FieldInput control={control} name="wasit" placeholder="nama" required />
          <FieldInput control={control} name="wasit" placeholder="telepon" required />
          <Form.Item className="flex flex-row gap-x-3">
            <Button icon={<LuPlus />} type="text" />
            <Button icon={<LuMinus />} type="text" />
          </Form.Item>
        </div>
      </Form.Item>

      <Form.Item label="Tembusan" required>
        <div className="flex flex-row gap-x-3">
          <FieldInput control={control} name="wasit" placeholder="nama" required />
          <FieldInput control={control} name="wasit" placeholder="email" required />
          <Form.Item className="flex flex-row gap-x-3">
            <Button icon={<LuPlus />} type="text" />
            <Button icon={<LuMinus />} type="text" />
          </Form.Item>
        </div>
        <div className="flex flex-row gap-x-3">
          <FieldInput control={control} name="wasit" placeholder="nama" required />
          <FieldInput control={control} name="wasit" placeholder="email" required />
          <Form.Item className="flex flex-row gap-x-3">
            <Button icon={<LuPlus />} type="text" />
            <Button icon={<LuMinus />} type="text" />
          </Form.Item>
        </div>
      </Form.Item> */}

      <Form.Item>
        <Button type="primary" htmlType="submit" block loading={false}> Save </Button>
      </Form.Item>
    </Form>
  );
}

export default FormCreateEvent;