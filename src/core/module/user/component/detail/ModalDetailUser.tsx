"use client"

import Loader from "@/common/ui/component/loader/Loader";
import ProfileAvatar from "@/core/layout/profile/ProfileAvatar";
import { createPopup } from "@/core/store/popup";
import { Alert, Modal, Tag } from "antd";
import { useDetailUser } from "../../hook/user";

// modal detail user store
export const useModalDetailUser = createPopup<{ id: number }>()

const ModalDetailUser = () => {

  // use modal detail
  const { isOpen, close, data: user } = useModalDetailUser()
  const { isLoading, isFetching, isSuccess, isError, error, data } = useDetailUser(user?.id as number, isOpen)

  return (
    <Modal
      open={isOpen}
      onCancel={close}
      closable
      footer={null}
      width={700}
      destroyOnClose
    >
      {(isLoading || isFetching) && (
        <Loader />
      )}

      {isSuccess && (
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex-1">
            <div className="w-full h-full bg-slate-200 overflow-hidden rounded-lg">
              <ProfileAvatar avatar={data?.data?.data?.detail?.path_photo as string} width={300} height={300} className="w-full h-full object-cover" />
              {/* <ProfileAvatar width={300} height={300} className="w-full h-full" /> */}
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-3">
            <div className="mb-3">
              <div className="text-2xl font-bold pr-10">{data?.data?.data?.user?.nama}</div>
              <div className="text-subtle"> {data?.data?.data?.user?.email} </div>
              <Tag className="bg-slate-200 border-none"> {data?.data?.data?.user?.role} </Tag>
            </div>
            {/* <div className="">
              <div className="text-muted-foreground"> {data?.data?.data?.user?.role} </div>
            </div> */}
            <div>
              <div className="font-semibold"> Lisensi </div>
              <div className="text-subtle"> {data?.data?.data?.detail?.no_lisensi} </div>
              <div className="text-subtle"> {data?.data?.data?.detail?.id_m_lisensi} </div>
            </div>
            <div>
              <div className="font-semibold"> Tempat, Tanggal Lahir</div>
              <div className="text-subtle"> {data?.data?.data?.detail?.tempat_lahir}, {data?.data?.data?.detail?.tanggal_lahir} </div>
            </div>
            <div>
              <div className="font-semibold"> Alamat </div>
              <div className="text-subtle"> {data?.data?.data?.detail?.alamat} </div>
            </div>
          </div>
        </div>
      )}

      {isError && (
        <Alert type="error" message={error?.response?.data?.messages || error?.message} />
      )}
    </Modal>
  );
}

export default ModalDetailUser;