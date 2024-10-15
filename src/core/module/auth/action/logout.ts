"use server"

import { DEFAULT_AUTH_LOGIN_URL, signOut } from "../lib/auth"

export const logout = async () => {
  await signOut({
    redirect: true,
    redirectTo: DEFAULT_AUTH_LOGIN_URL
  })
}