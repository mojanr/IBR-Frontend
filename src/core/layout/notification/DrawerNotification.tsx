"use client"

import Title from "@/common/ui/component/title/Title";
import { createPopup } from "@/core/store/popup";
import { Drawer } from "antd";
import { LuX } from "react-icons/lu";
import SimpleBar from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';

type DrawerNotificationProps = {
  width?: number
  className?: string
}

// drawer notification store
export const useDrawerNotification = createPopup()

const DrawerNotification = ({ children, width, className }: React.PropsWithChildren<DrawerNotificationProps>) => {

  // use drawer notification
  const { isOpen, close } = useDrawerNotification();

  return (
    <Drawer
      open={isOpen}
      onClose={close}
      closable={false}
      placement="left"
      width={width}
      classNames={{
        wrapper: "shadow-none",
        content: "bg-transparent p-2",
        body: "py-3 px-0 bg-white rounded-md"
      }}
      key="drawer-notification"
    >
      <SimpleBar className="h-full" forceVisible="y" autoHide={true}>


        <Title className="mb-3 px-3"> Notification </Title>
        {/* <div className="flex flex-row justify-between">
        <Title className="mb-3 px-3"> Notification </Title>
        <div className="w-[33px] h-[33px] flex items-center justify-center p-2 hover:text-slate-200 hover:cursor-pointer">
          <LuX className="text-2xl" />
        </div>
      </div> */}

        <div className="flex flex-col">
          <div className="flex flex-row gap-x-2 border-b-[1px] border-solid border-b-slate-100 pb-5 hover:bg-slate-100 hover:cursor-pointer rounded-lg p-3">
            <div className="w-[6px] h-[6px] rounded-full bg-primary mt-[7px]" />
            <div className="flex-1">
              <div className="font-bold"> Title notif </div>
              <div> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias nihil ratione ut quae odio quod, id sit nam vel qui doloremque sequi fuga ex saepe illo consectetur dolor reiciendis labore! </div>
            </div>
          </div>

          <div className="flex flex-row gap-x-2 border-b-[1px] border-solid border-b-slate-100 pb-5 hover:bg-slate-100 hover:cursor-pointer rounded-lg p-3">
            <div className="w-[6px] h-[6px] rounded-full bg-primary mt-[7px]" />
            <div className="flex-1">
              <div className="font-bold"> Title notif </div>
              <div> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias nihil ratione ut quae odio quod, id sit nam vel qui doloremque sequi fuga ex saepe illo consectetur dolor reiciendis labore! </div>
            </div>
          </div>

          <div className="flex flex-row gap-x-2 border-b-[1px] border-solid border-b-slate-100 pb-5 hover:bg-slate-100 hover:cursor-pointer rounded-lg p-3">
            <div className="w-[6px] h-[6px] rounded-full bg-primary mt-[7px]" />
            <div className="flex-1">
              <div className="font-bold"> Title notif </div>
              <div> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias nihil ratione ut quae odio quod, id sit nam vel qui doloremque sequi fuga ex saepe illo consectetur dolor reiciendis labore! </div>
            </div>
          </div>

          <div className="flex flex-row gap-x-2 border-b-[1px] border-solid border-b-slate-100 pb-5 hover:bg-slate-100 hover:cursor-pointer rounded-lg p-3">
            <div className="w-[6px] h-[6px] rounded-full bg-primary mt-[7px]" />
            <div className="flex-1">
              <div className="font-bold"> Title notif </div>
              <div> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias nihil ratione ut quae odio quod, id sit nam vel qui doloremque sequi fuga ex saepe illo consectetur dolor reiciendis labore! </div>
            </div>
          </div>

          <div className="flex flex-row gap-x-2 border-b-[1px] border-solid border-b-slate-100 pb-5 hover:bg-slate-100 hover:cursor-pointer rounded-lg p-3">
            <div className="w-[6px] h-[6px] rounded-full bg-primary mt-[7px]" />
            <div className="flex-1">
              <div className="font-bold"> Title notif </div>
              <div> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias nihil ratione ut quae odio quod, id sit nam vel qui doloremque sequi fuga ex saepe illo consectetur dolor reiciendis labore! </div>
            </div>
          </div>

          <div className="flex flex-row gap-x-2 border-b-[1px] border-solid border-b-slate-100 pb-5 hover:bg-slate-100 hover:cursor-pointer rounded-lg p-3">
            <div className="w-[6px] h-[6px] rounded-full bg-primary mt-[7px]" />
            <div className="flex-1">
              <div className="font-bold"> Title notif </div>
              <div> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias nihil ratione ut quae odio quod, id sit nam vel qui doloremque sequi fuga ex saepe illo consectetur dolor reiciendis labore! </div>
            </div>
          </div>

          <div className="flex flex-row gap-x-2 border-b-[1px] border-solid border-b-slate-100 pb-5 hover:bg-slate-100 hover:cursor-pointer rounded-lg p-3">
            <div className="w-[6px] h-[6px] rounded-full bg-primary mt-[7px]" />
            <div className="flex-1">
              <div className="font-bold"> Title notif </div>
              <div> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias nihil ratione ut quae odio quod, id sit nam vel qui doloremque sequi fuga ex saepe illo consectetur dolor reiciendis labore! </div>
            </div>
          </div>

          <div className="flex flex-row gap-x-2 border-b-[1px] border-solid border-b-slate-100 pb-5 hover:bg-slate-100 hover:cursor-pointer rounded-lg p-3">
            <div className="w-[6px] h-[6px] rounded-full bg-primary mt-[7px]" />
            <div className="flex-1">
              <div className="font-bold"> Title notif </div>
              <div> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias nihil ratione ut quae odio quod, id sit nam vel qui doloremque sequi fuga ex saepe illo consectetur dolor reiciendis labore! </div>
            </div>
          </div>

          <div className="flex flex-row gap-x-2 border-b-[1px] border-solid border-b-slate-100 pb-5 hover:bg-slate-100 hover:cursor-pointer rounded-lg p-3">
            <div className="w-[6px] h-[6px] rounded-full bg-primary mt-[7px]" />
            <div className="flex-1">
              <div className="font-bold"> Title notif </div>
              <div> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias nihil ratione ut quae odio quod, id sit nam vel qui doloremque sequi fuga ex saepe illo consectetur dolor reiciendis labore! </div>
            </div>
          </div>

          <div className="flex flex-row gap-x-2 border-b-[1px] border-solid border-b-slate-100 pb-5 hover:bg-slate-100 hover:cursor-pointer rounded-lg p-3">
            <div className="w-[6px] h-[6px] rounded-full bg-primary mt-[7px]" />
            <div className="flex-1">
              <div className="font-bold"> Title notif </div>
              <div> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias nihil ratione ut quae odio quod, id sit nam vel qui doloremque sequi fuga ex saepe illo consectetur dolor reiciendis labore! </div>
            </div>
          </div>

          <div className="flex flex-row gap-x-2 border-b-[1px] border-solid border-b-slate-100 pb-5 hover:bg-slate-100 hover:cursor-pointer rounded-lg p-3">
            <div className="w-[6px] h-[6px] rounded-full bg-primary mt-[7px]" />
            <div className="flex-1">
              <div className="font-bold"> Title notif </div>
              <div> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias nihil ratione ut quae odio quod, id sit nam vel qui doloremque sequi fuga ex saepe illo consectetur dolor reiciendis labore! </div>
            </div>
          </div>

          <div className="flex flex-row gap-x-2 border-b-[1px] border-solid border-b-slate-100 pb-5 hover:bg-slate-100 hover:cursor-pointer rounded-lg p-3">
            <div className="w-[6px] h-[6px] rounded-full bg-primary mt-[7px]" />
            <div className="flex-1">
              <div className="font-bold"> Title notif </div>
              <div> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias nihil ratione ut quae odio quod, id sit nam vel qui doloremque sequi fuga ex saepe illo consectetur dolor reiciendis labore! </div>
            </div>
          </div>

          <div className="flex flex-row gap-x-2 border-b-[1px] border-solid border-b-slate-100 pb-5 hover:bg-slate-100 hover:cursor-pointer rounded-lg p-3">
            <div className="w-[6px] h-[6px] rounded-full bg-primary mt-[7px]" />
            <div className="flex-1">
              <div className="font-bold"> Title notif </div>
              <div> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias nihil ratione ut quae odio quod, id sit nam vel qui doloremque sequi fuga ex saepe illo consectetur dolor reiciendis labore! </div>
            </div>
          </div>

          <div className="flex flex-row gap-x-2 border-b-[1px] border-solid border-b-slate-100 pb-5 hover:bg-slate-100 hover:cursor-pointer rounded-lg p-3">
            <div className="w-[6px] h-[6px] rounded-full bg-primary mt-[7px]" />
            <div className="flex-1">
              <div className="font-bold"> Title notif </div>
              <div> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias nihil ratione ut quae odio quod, id sit nam vel qui doloremque sequi fuga ex saepe illo consectetur dolor reiciendis labore! </div>
            </div>
          </div>
        </div>
      </SimpleBar>
      {children}
    </Drawer>
  );
}

export default DrawerNotification;