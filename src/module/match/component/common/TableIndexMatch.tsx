"use client"

import { Table } from "antd";
import { TableIndexMatchColumn } from "./TableIndexMatchColumn";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useGetMatch } from "../../hook/match";
import Error from "@/common/ui/component/error/Error";

type TableIndexMatchProps = {
  eventId: string
}

const TableIndexMatch = ({ eventId }: TableIndexMatchProps) => {

  // use match
  const {
    query: { data, isLoading, isFetching, isError, error },
    changePage,
    params
  } = useGetMatch(eventId)

  // const data: any[] = [
  //   {
  //     id: 1,
  //     nama: "test match"
  //   }
  // ]
  // on table change handler
  const onPaginationChange = (page: any, pageSize: number) => {
    changePage({ page, limit: pageSize })
  }

  return (
    <>
      {isError && (error.status != 404) ? (
        <Error />
      ) : (
        <>
          <div className="mb-3">
            <div className="text-subtle font-subtle"> {data?.data?.data?.event?.nomor_event} </div>
            <div className="text-subtle font-subtle"> {data?.data?.data?.event?.nama_event} </div>
            <div className="text-subtle font-subtle"> {data?.data?.data?.event?.deskripsi} </div>
          </div>
          <Table
            dataSource={data?.data?.data?.match || []}
            columns={TableIndexMatchColumn}
            pagination={{
              current: data?.data?.page,
              pageSize: params?.pagination?.limit as number,
              pageSizeOptions: [10, 25, 50, 100],
              total: data?.data?.totalData,
              showSizeChanger: true,
              showTotal: (total) => `Total ${total}`,
              onChange: onPaginationChange
            }}
            loading={{
              spinning: isLoading || isFetching,
              indicator: <AiOutlineLoading3Quarters className="animate-spin text-4xl" />
            }}
            // loading={isLoading || isFetching}
            size="small"
            scroll={{ x: 1200 }}
            rowKey="id"
          />
        </>
      )}
    </>
  );
}

export default TableIndexMatch;