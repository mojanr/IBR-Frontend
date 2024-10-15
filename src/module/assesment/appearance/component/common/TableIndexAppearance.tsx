"use client"

import { Table } from "antd";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { TableIndexAppearanceColumn } from "./TableIndexAppearanceColumn";
import { type Appearance } from "../../type/appearance";
import { useTableIndexAppearance } from "../../hook/appearance";
import Error from "@/common/ui/component/error/Error";
import { useEffect, useState } from "react";
import { arrayToTreeSim } from "@/core/lib/util";
import ModalCreateAppearanceTrigger from "../create/ModalCreateAppearanceTrigger";

const TableIndexAppearance = () => {

  // const data: Appearance[] = [
  //   {
  //     id: 1,
  //     indicator: "Testing indikator 1",
  //     value: 1000
  //   },
  //   {
  //     id: 2,
  //     indicator: "Testing indikator 1",
  //     value: 1000
  //   },
  //   {
  //     id: 3,
  //     indicator: "Testing indikator 1",
  //     value: 1000
  //   },
  //   {
  //     id: 4,
  //     indicator: "Testing indikator 1",
  //     value: 1000
  //   },
  //   {
  //     id: 5,
  //     indicator: "Testing indikator 1",
  //     value: 1000
  //   },
  //   {
  //     id: 6,
  //     indicator: "Testing indikator 1",
  //     value: 1000
  //   },
  //   {
  //     id: 7,
  //     indicator: "Testing indikator 1",
  //     value: 1000
  //   },
  //   {
  //     id: 8,
  //     indicator: "Testing indikator 1",
  //     value: 1000
  //   },
  //   {
  //     id: 9,
  //     indicator: "Testing indikator 1",
  //     value: 1000
  //   },
  //   {
  //     id: 10,
  //     indicator: "Testing indikator 1",
  //     value: 1000
  //   },
  // ]

  const {
    query: { data, isLoading, isFetching, isSuccess, isError, error },
    changePage,
    params
  } = useTableIndexAppearance()
  // datasource state
  const [dataSource, setDataSource] = useState(data?.data?.data || [])
  const [order, setOrder] = useState(0)

  useEffect(() => {
    setDataSource(arrayToTreeSim(data?.data?.data || []))
  }, [isSuccess])

  useEffect(() => {
    if (dataSource[dataSource.length - 1]) {
      setOrder(dataSource[dataSource.length - 1].order_by + 1)
    }
  }, [dataSource])

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
          dataSource={dataSource}
          columns={TableIndexAppearanceColumn}
          // pagination={{
          //   current: data?.data?.page,
          //   pageSize: params?.pagination?.limit as number,
          //   pageSizeOptions: [10, 25, 50, 100],
          //   total: data?.data?.totalData,
          //   showSizeChanger: true,
          //   showTotal: (total) => `Total ${total}`,
          //   onChange: onPaginationChange
          // }}
          pagination={false}
          loading={{
            spinning: isLoading || isFetching,
            indicator: <AiOutlineLoading3Quarters className="animate-spin text-4xl" />
          }}
          // loading={isLoading || isFetching}
          footer={() => <ModalCreateAppearanceTrigger order={order} level={1} />}
          size="small"
          scroll={{ x: 1200 }}
          rowKey="id"
        />
      )}
    </>
  );
}

export default TableIndexAppearance;