"use client"

import { Suspense } from "react";
import ErrorLogin from "./ErrorLogin";

const ErrorWrapper = () => {
  return (
    <Suspense>
      <ErrorLogin />
    </Suspense>
  );
}

export default ErrorWrapper;