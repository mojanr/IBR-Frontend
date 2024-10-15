"use client"

import Error from "@/common/ui/component/error/Error";
import { Table } from "antd";
import { useGetUserApproval } from "../../hook/user";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { TableIndexUserApprovalColumn } from "./TableIndexUserApprovalColumn";

const TableIndexUserApproval = () => {

  // use table index user approval
  const {
    query: { data, isLoading, isFetching, isError, error},
    changePage,
    params,
  } = useGetUserApproval()

  // on table change handler
  const onPaginationChange = (page: number, pageSize: number) => {
    changePage(page, pageSize)
  }

  return (
    <>
      {isError ? (
        <Error />
      ) : (
        <Table
          dataSource={data?.data?.data || []}
          columns={TableIndexUserApprovalColumn}
          pagination={{
            current: data?.data.page,
            pageSize: params.limit as number,
            pageSizeOptions: [10, 25, 50, 100],
            total: data?.data.totalData,
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

export default TableIndexUserApproval;