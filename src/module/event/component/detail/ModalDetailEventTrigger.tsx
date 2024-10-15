import { useModalDetailEvent } from "./ModalDetailEvent";

type ModalDetailEventTriggerProps = {
  id: number
}

const ModalDetailEventTrigger = ({ id, children }: React.PropsWithChildren<ModalDetailEventTriggerProps>) => {

  // use modal detail event
  const { open } = useModalDetailEvent()

  // open detail 
  const openDetail = () => open({ id })

  return (
    <span onClick={openDetail} className="text-blue-500 hover:cursor-pointer hover:text-blue-400"> {children} </span>
  );
}

export default ModalDetailEventTrigger;