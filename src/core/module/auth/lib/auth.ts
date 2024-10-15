import NextAuth, { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { loginSchema } from "../schema/login"
import { ZodError } from "zod"
import { login } from "../service/auth"
import { AxiosError } from "axios"

export const DEFAULT_AUTH_LOGIN_URL = "/"
export const DEFAULT_AUTH_LOGIN_REDIRECT_URL = "/main"
export const DEFAULT_AUTH_REGISTER_URL = "/register"
export const DEFAULT_AUTH_PROTECTED_PREFIX_URL = "/main"
export const DEFAULT_AUTH_API_PREFIX_URL = "/api/auth"

export const authConfig = {
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          let user: any = null

          const { username, password } = await loginSchema.parseAsync(credentials)

          // logic to salt and hash password
          // const pwHash = saltAndHashPassword(password)

          // logic to verify if the user exists
          // user = await getUserFromDb(email, pwHash)
          const response = await login(username, password)
            .catch(error => {
              throw new Error("Invalid credentials")
            })

          // console.log(response.data)

          // if (!user) {
          //   throw new Error("User not found.")
          // }

          user = {
            id: response.data.username,
            ...response.data
          }

          // return JSON object with the user data
          return user
        } catch (error) {
          if (error instanceof ZodError || error instanceof AxiosError) {
            // Return `null` to indicate that the credentials are invalid
            return null
          }
        }
      },
    })
  ],
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: DEFAULT_AUTH_LOGIN_URL,
    newUser: DEFAULT_AUTH_REGISTER_URL
  },
  callbacks: {
    // authorized: async ({ auth }) => {
    //   // Logged in users are authenticated, otherwise redirect to login page
    //   return !!auth
    // }
    async jwt({ token, user, account }) {
      // set token info
      if (account && user) {
        token.user = user
      }

      return token
    },
    async session({ session, user, token}) {
      // set user session from token
      if (token.user) {
        session.user = token.user
      }
      
      return session
    }
  }
} satisfies NextAuthConfig

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig)