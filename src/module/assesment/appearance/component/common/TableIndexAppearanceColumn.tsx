import { type TableProps } from "antd";
import type { Appearance } from "../../type/appearance";
import { cn } from "@/core/lib/util";
import TableIndexAppearanceColumnAction from "./TableIndexAppearanceColumnAction";

export const TableIndexAppearanceColumn: TableProps<Appearance>["columns"] = [
  {
    title: "Indikator",
    dataIndex: "indicator",
    key: "indicator",
    render: (indicator, appearance) => <span className={cn({ 'font-bold': appearance.level == 1 })}> {appearance.nama} </span>
  },
  {
    title: "Persentase",
    dataIndex: "persentase",
    key: "persentase",
    width: 200
  },
  {
    title: "",
    dataIndex: "id",
    key: "id",
    fixed: "right",
    width: 50,
    render: (_, appearance) => <TableIndexAppearanceColumnAction id={appearance.id as number} appearance={appearance} />
  },
]