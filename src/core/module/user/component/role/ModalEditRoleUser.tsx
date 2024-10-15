"use client"

import Title from "@/common/ui/component/title/Title";
import { createPopup } from "@/core/store/popup";
import { App, Modal } from "antd";
import FormEditRoleUser from "./FormEditRoleUser";

// modal edit role 
export const useModalEditRoleUser = createPopup<{ id: number }>()

const ModalEditRoleUser = () => {

  // use modal edit role
  const { isOpen, close, data: user } = useModalEditRoleUser();
  // use app notification
  const { notification } = App.useApp()

  // on success
  const onSuccess = (message: any) => {
    notification.success({
      message: "Berhasil mengubah role"
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
      <Title className="mb-5"> Change Role </Title>
      <FormEditRoleUser userId={user?.id as number} onSuccess={onSuccess} />
    </Modal>
  );
}

export default ModalEditRoleUser;