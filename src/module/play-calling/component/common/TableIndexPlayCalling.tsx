"use client"

import Error from "@/common/ui/component/error/Error";
import { Table } from "antd";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { TableIndexPlayCallingColumn } from "./TableIndexPlayCallingColumn";
import { useGetPlayCalling } from "../../hook/play-calling";

const TableIndexPlayCalling = () => {

  // use table index play calling
  const {
    query: { data, isLoading, isFetching, isError, error },
    changePage,
    params
  } = useGetPlayCalling()

  // on table change handler
  const onPaginationChange = (page: any, pageSize: number) => {
    changePage({ page, limit: pageSize })
  }

  return (
    <>
      {isError && (error.status != 404) ? (
        <Error />
      ) : (
        <Table
          dataSource={data?.data?.data || []}
          columns={TableIndexPlayCallingColumn}
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
      )}
    </>
  );
}

export default TableIndexPlayCalling;