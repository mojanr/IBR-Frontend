"use client"

import { Button } from "antd";
import { useModalCreateAppearance } from "./ModalCreateAppearance";
import { LuPlus } from "react-icons/lu";

type ModalCreateAppearanceTrigger = {
  order: number
  level: number
  idParentAppearance?: number
}

const ModalCreateAppearanceTrigger = ({ order, level, idParentAppearance }: ModalCreateAppearanceTrigger) => {

  // use modal create appearance 
  const { open } = useModalCreateAppearance()

  return (
    <Button type="text" icon={<LuPlus />} block onClick={() => open({ order, level, idParentAppearance })}> Create Indicator </Button>
  );
}

export default ModalCreateAppearanceTrigger;