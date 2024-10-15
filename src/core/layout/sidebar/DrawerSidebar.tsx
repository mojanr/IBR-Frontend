"use client"

import { createPopup } from "@/core/store/popup"
import { useSize } from "ahooks"
import { Drawer } from "antd"
import { useEffect } from "react"

type DrawerSidebarProps = {
  width?: number
  className?: string
}

// drawer sidebar store
export const useDrawerSidebar = createPopup()

const DrawerSidebar = ({ children, width = 224, className }: React.PropsWithChildren<DrawerSidebarProps>) => {

  // use window width
  const size = useSize(() => document.querySelector('body'));
  // use drawer sidebar
  const { isOpen, close } = useDrawerSidebar()


  // if (size?.width || 0 <= 768) {
  //   if (isOpen) {
  //     close()
  //   }
  // }

  useEffect(() => {
    if (size?.width || 0 <= 768) {
      if (isOpen) {
        close()
      }
    }
  }, [])

  return (
    <Drawer
      open={isOpen}
      onClose={close}
      closable={false}
      placement="left"
      width={width}
      classNames={{
        body: 'p-0'
      }}
      key="drawer-sidebar"
    >
      {children}
    </Drawer>
  );
}

export default DrawerSidebar;