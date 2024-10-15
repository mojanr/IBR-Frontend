"use client"

import Title from "@/common/ui/component/title/Title";
import { createPopup } from "@/core/store/popup";
import { App, Modal } from "antd";
import FormBatalEvent from "./FormBatalEvent";

// use modal batal event store
export const useModalBatalEvent = createPopup<{ id: number }>()

const ModalBatalEvent = () => {

  // use modal batal event
  const { isOpen, close, data: event } = useModalBatalEvent()
  // use app notification
  const { notification } = App.useApp()

  // on success
  const onSuccess = (message: any) => {
    notification.success({
      message: "Berhasil batal event"
    })
  }

  return (
    <Modal
      open={isOpen}
      onCancel={close}
      closable
      footer={null}
      width={700}
      destroyOnClose
    >
     <Title className="mb-3"> Batal Event </Title>
     <FormBatalEvent eventId={event?.id as number} onSuccess={onSuccess} />
    </Modal>
  );
}

export default ModalBatalEvent;