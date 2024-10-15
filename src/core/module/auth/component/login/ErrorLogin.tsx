"use client"

import { Alert } from "antd";
import { useSearchParams } from "next/navigation";

const ErrorLogin = () => {

  // use parameter
  const queryParams = useSearchParams()
  const error = queryParams.get("error")

  return (
    error && error != "" && (
      <Alert type="error" message="Opps, username atau password yang dimasukkan salah!" />
    )
  );
}

export default ErrorLogin;