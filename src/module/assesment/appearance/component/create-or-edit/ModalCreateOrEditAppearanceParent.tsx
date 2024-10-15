import Title from "@/common/ui/component/title/Title";
import { createPopup } from "@/core/store/popup";
import { App, Modal } from "antd";
import FormCreateOrEditAppearanceParent from "./FormCreateOrEditAppearanceParent";

export const useModalCreateOrEditAppearanceParent = createPopup<{
  isCreate?: boolean
  order: number
  targetLevel: number
  idParentAppearance?: number
}>({
  data: {
    isCreate: true,
    order: 1,
    targetLevel: 1,
    // idParentAppearance: 1,
  }
})

type ModalCreateOrEditAppearanceParentProps = {
  userId: string
}

const ModalCreateOrEditAppearanceParent = ({ userId }: ModalCreateOrEditAppearanceParentProps) => {

  // use modal create or edit appearance
  const { isOpen, close, data } = useModalCreateOrEditAppearanceParent()
  // use app notification
  const { notification } = App.useApp()

  // on sucess
  const onSuccess = (message: any) => {
    notification.success({
      message: "Berhasil menambahkah indikator"
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
      <Title className="mb-5"> {`${data?.isCreate ? 'Create' : 'Edit'} Indicator`} </Title>
      <FormCreateOrEditAppearanceParent />
    </Modal>
  );
}

export default ModalCreateOrEditAppearanceParent;