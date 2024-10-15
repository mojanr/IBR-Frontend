"use client"

import { Button } from "antd";
import { LuPlus } from "react-icons/lu";
import { useDrawerFormCreateEvent } from "./DrawerFormCreateEvent";

const DrawerFormCreateEventTrigger = () => {

  // use drawer form create envet trigger
  const { open } = useDrawerFormCreateEvent()

  return (
    <Button type="primary" icon={<LuPlus />} onClick={open}> Create Event </Button>
  );
}

export default DrawerFormCreateEventTrigger;