import type { GetProp, UploadProps } from "antd";
import clsx, { type ClassValue } from "clsx"
import dayjs from "dayjs";
import { twMerge } from "tailwind-merge"
import customParseFormat from "dayjs/plugin/customParseFormat";
import { arrayToTree } from "performant-array-to-tree";

// dayjs custom parse format extension
// dayjs.extend(customParseFormat)

export const cn = (...input: ClassValue[]) => {
  return twMerge(clsx(input))
}

// optional specific record type
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type WithOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];
export const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

// parse date dayjs to date string
export const dayjsToString = (date: any) => {
  return dayjs(date).format("YYYY-MM-DD")
}

// array to tree with removed empty children
export const arrayToTreeSim = (dataSource: any[]) => {
  const arrayTree = arrayToTree(dataSource, { parentId: "id_parent", childrenField: "children", dataField: null })
  return arrayTree.map((value, index) => {
    // check if children is not empty
    if (value.children && value.children.length > 0) {
      return {
        ...value,
        children: (value.children as any[]).map((valueChildren, indexChildren) => {
          if (valueChildren.children && valueChildren.length > 0) {
            return valueChildren
          } else {
            delete valueChildren.children
            return valueChildren
          }
        })
      }
    } else {
      delete value.children
      return value
    }
  })
}