"use client"

import Title from "@/common/ui/component/title/Title";
import { createPopup } from "@/core/store/popup";
import { App, Modal } from "antd";
import FormEditPasswordUser from "./FormEditPasswordUser";

// modal edit password
export const useModalEditPasswordUser = createPopup<{ id: number }>()

const ModalEditPasswordUser = () => {

  // use modal edit password
  const { isOpen, close, data: user } = useModalEditPasswordUser()
  // use app notification
  const { notification } = App.useApp()

  // on success
  const onSuccess = (message: any) => {
    notification.success({
      message: "Berhasil mengubah password"
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
      <Title className="mb-5"> Change Password </Title>
      <FormEditPasswordUser userId={user?.id as number} onSuccess={onSuccess} />
    </Modal>
  );
}

export default ModalEditPasswordUser;