"use client"

import Error from "@/common/ui/component/error/Error";
import { useTableIndexUser } from "../../hook/user";
import { Table } from "antd";
import { TableIndexUserColumn } from "./TableIndexUserColumn";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const TableIndexUser = () => {

  // use table index user
  const {
    query: { data, isLoading, isFetching, isError, error },
    changePage,
    params
  } = useTableIndexUser()

  // on table change handler
  const onPaginationChange = (page: any, pageSize: number) => {
    changePage({ page, limit: pageSize})
  }

  return (
    <>
      {isError && (error.status != 404) ? (
        <Error />
      ) : (
        <Table
          dataSource={data?.data?.data || []}
          columns={TableIndexUserColumn}
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

export default TableIndexUser;