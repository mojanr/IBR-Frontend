"use client"

import { AppProgressBar } from "next-nprogress-bar";
import { COLOR } from "../../../tailwind.config";

const NextProgressBarProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <AppProgressBar
        height="4px"
        color={COLOR.PRIMARY}
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
}

export default NextProgressBarProvider;