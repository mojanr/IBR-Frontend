"use client"

import Title from "@/common/ui/component/title/Title";
import { createPopup } from "@/core/store/popup";
import { App, Modal } from "antd";
import FormCreateAppearance from "./FormCreateAppearance";

export const useModalCreateAppearance = createPopup<{
  order: number
  level: number
  idParentAppearance?: number
}>()

type ModalCreateAppearanceProps = {
  userId: string
}

const ModalCreateAppearance = ({ userId }: ModalCreateAppearanceProps) => {

  // use modal create appearance
  const { isOpen, close, data } = useModalCreateAppearance()
  // use app notification
  const { notification } = App.useApp()

  // on success
  const onSuccess = (message: any) => {
    notification.success({
      message: "Berhasil menambahkan indikator"
    })
    close()
  }

  return (
    <Modal
      open={isOpen}
      onCancel={close}
      closable
      footer={null}
      // width={700}
      destroyOnClose
    >
      <Title className="mb-5"> Create Appearance Assestment Indicator </Title>
      {/* <FormEditPasswordUser userId={user?.id as number} onSuccess={onSuccess} /> */}
      <FormCreateAppearance
        userId={userId}
        level={data?.level as number}
        order={data?.order as number}
        idParentAppearance={data?.idParentAppearance as number}
        onSuccess={onSuccess}
      />
    </Modal>
  );
}

export default ModalCreateAppearance;