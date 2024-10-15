"use client"

import Loader from "@/common/ui/component/loader/Loader";
import { createPopup } from "@/core/store/popup";
import { Alert, Modal } from "antd";
import { useDetailEvent } from "../../hook/event";
import Title from "@/common/ui/component/title/Title";

// modal detail event store
export const useModalDetailEvent = createPopup<{ id: number }>()

const ModalDetailEvent = () => {

  // use modal detail
  const { isOpen, close, data: event } = useModalDetailEvent()
  const { isLoading, isFetching, isSuccess, isError, error, data } = useDetailEvent(event?.id as number, isOpen)

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
        <div className="flex flex-col gap-5">
          <div>
            <Title className="mb-3"> {data?.data?.data?.nomor_event} </Title>
            <div className="text-subtle font-subtle"> {data?.data?.data?.nama_event} </div>
          </div>
          <div className="flex-1 flex flex-col gap-3">
            <div>
              <div className="font-semibold"> Deskripsi </div>
              <div className="text-subtle"> {data?.data?.data?.deskripsi} </div>
            </div>
            <div>
              <div className="font-semibold"> Tanggal Pelaksanaan </div>
              <div className="text-subtle"> {data?.data?.data?.tanggal_mulai} - {data?.data?.data?.tanggal_selesai} </div>
            </div>
            <div>
              <div className="font-semibold"> Tipe </div>
              <div className="text-subtle"> {data?.data?.data?.tipe} </div>
            </div>
            <div>
              <div className="font-semibold"> Pengaju </div>
              <div className="text-subtle"> {data?.data?.data?.nama_pengaju} </div>
            </div>
            <div>
              <div className="font-semibold"> Approval </div>
              <div className="text-subtle"> {data?.data?.data?.user_approval} </div>
            </div>
            <div>
              <div className="font-semibold"> Ketarangan </div>
              <div className="text-subtle"> {data?.data?.data?.keterangan || "-"} </div>
            </div>
            <div>
              <div className="font-semibold"> Perihal </div>
              <div className="text-subtle"> {data?.data?.data?.perihal} </div>
            </div>
            <div>
              <div className="font-semibold"> Contact Person </div>
              <div> {data?.data?.data?.contact_person?.map((contactPerson) => (
                <div>{contactPerson.nama} - {contactPerson.telepon}</div>
              ))} </div>
            </div>
            <div>
              <div className="font-semibold"> Participant </div>
              <div> {data?.data?.data?.participant?.map((particpant) => (
                <div>{particpant.user} - {particpant.nama_tugas}</div>
              ))} </div>
            </div>
            <div>
              <div className="font-semibold"> Region </div>
              <div> {data?.data?.data?.region?.map((region) => (
                <div>{region.region}</div>
              ))} </div>
            </div>
            <div>
              <div className="font-semibold"> Tembusan </div>
              <div> {data?.data?.data?.tembusan?.map((tembusan) => (
                <div>{tembusan.nama} - {tembusan.email}</div>
              ))} </div>
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

export default ModalDetailEvent;