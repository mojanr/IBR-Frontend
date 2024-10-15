"use client"

import { StyleProvider } from "@ant-design/cssinjs";

const AntdStyleProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <StyleProvider>
      {children}
    </StyleProvider>
  );
}

export default AntdStyleProvider;