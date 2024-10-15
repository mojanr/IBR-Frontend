"use client"

import { useModalDetailUser } from "./ModalDetailUser";

type ModalDetailUserTriggerProps = {
  id: number,
}

const ModalDetailUserTrigger = ({ id, children }: React.PropsWithChildren<ModalDetailUserTriggerProps>) => {

  // use modal detail user
  const { open } = useModalDetailUser()

  // open detail
  const openDetail = () => open({ id })

  return (
    <span onClick={openDetail} className="text-blue-500 hover:cursor-pointer hover:text-blue-400"> {children} </span>
  );
}

export default ModalDetailUserTrigger;