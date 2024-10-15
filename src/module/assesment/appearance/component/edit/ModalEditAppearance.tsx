import Title from "@/common/ui/component/title/Title"
import { createPopup } from "@/core/store/popup"
import { App, Modal } from "antd"

export const useModalEditAppearance = createPopup()

const ModalEditAppearance = () => {

  // use modal create appearance
  const { isOpen, close, data } = useModalEditAppearance()
  // use app notification
  const { notification } = App.useApp()

  // on success
  const onSuccess = (message: any) => {
    notification.success({
      message: "Berhasil edit indikator"
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
      <Title className="mb-5"> Edit Appearance Assestment Indicator </Title>
      {/* <FormEditPasswordUser userId={user?.id as number} onSuccess={onSuccess} /> */}
    </Modal>
  );
}

export default ModalEditAppearance;