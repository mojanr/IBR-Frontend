"use server"

import { AuthError } from "next-auth"
import { DEFAULT_AUTH_LOGIN_REDIRECT_URL, DEFAULT_AUTH_LOGIN_URL, signIn } from "../lib/auth"
import { redirect } from "next/navigation"

export const register = async (formData: any) => {
  // console.log(first)
  try {
    // await signIn("credentials", {
    //   ...formData,
    //   redirect: true,
    //   redirectTo: DEFAULT_AUTH_LOGIN_REDIRECT_URL
    // })
  } catch (error) {
    if (error instanceof AuthError) {
      return redirect(`${DEFAULT_AUTH_LOGIN_URL}?error=${error.type}`)
    }
    throw error
  }
}