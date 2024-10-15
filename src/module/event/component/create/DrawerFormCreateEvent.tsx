"use client"

import Title from "@/common/ui/component/title/Title";
import { createPopup } from "@/core/store/popup";
import { Drawer } from "antd";
import FormCreateEvent from "./FormCreateEvent";

type DrawerFormCreateEvent = {
  width?: number
  className?: string
}

// drawer create event store
export const useDrawerFormCreateEvent = createPopup()

const DrawerFormCreateEvent = ({ width = 600 }: DrawerFormCreateEvent) => {
  
  // use drawer
  const { isOpen, close } = useDrawerFormCreateEvent()
  
  return (
    <Drawer
      open={isOpen}
      onClose={close}
      closable={false}
      placement="right"
      width={width}
      classNames={{
        body: 'p-5'
      }}
      key="drawer-form-create-event"
      destroyOnClose
    >
      {/* {children} */}
      <Title className="mb-5"> Create Event </Title>
      <FormCreateEvent />
    </Drawer>
  );
}

export default DrawerFormCreateEvent;