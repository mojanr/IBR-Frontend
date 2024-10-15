import { App, Switch } from "antd"
import { useState } from "react"
import { useUpdateStatusUser } from "../../hook/user"

type SwitchStatusUserProps = {
  userId: number
  status: boolean
}

const SwitchStatusUser = ({ userId, status }: SwitchStatusUserProps) => {

  // use app
  const { notification } = App.useApp()
  // use update status user
  const { mutate, isPending, isError, data, error } = useUpdateStatusUser(userId)
  // use update user status
  const [newStatus, setNewStatus] = useState<boolean>(status)

  // on change
  const onChange = (value: boolean) => {
    setNewStatus(value)
    // update
    mutate(value as any, {
      onError: () => notification.error({ message: "Gagal update status" })
    })
  }

  return (
    <Switch
      defaultChecked={status}
      defaultValue={status}
      value={isError ? status : newStatus}
      onChange={onChange}
      loading={isPending}
      className="flex items-center justify-center"
      checkedChildren={<div className="font-semibold"> Active </div>}
      unCheckedChildren={<div className="font-semibold text-black"> Inactive </div>}
    />
  );
}

export default SwitchStatusUser;