// "use client"

import { ConfigProvider } from "antd";
import { antdTheme } from "../config/antd";

const AntdConfigProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <ConfigProvider theme={antdTheme}>
      {children}
    </ConfigProvider>
  );
}

export default AntdConfigProvider;