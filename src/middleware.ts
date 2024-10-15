import NextAuth from "next-auth"
import { auth, DEFAULT_AUTH_API_PREFIX_URL, DEFAULT_AUTH_LOGIN_REDIRECT_URL, DEFAULT_AUTH_LOGIN_URL, DEFAULT_AUTH_PROTECTED_PREFIX_URL, DEFAULT_AUTH_REGISTER_URL } from "@/core/module/auth/lib/auth"
// import { NextResponse } from "next/server"

// const { auth } = NextAuth(authConfig)

// export default auth((req) => {

//   // nexturl
//   const { nextUrl } = req
//   const isLoggedIn = !!req.auth

//   const isApiAuthRoute = nextUrl.pathname.startsWith(DEFAULT_AUTH_API_PREFIX_URL)
//   const isAuthProtectedRoute = nextUrl.pathname.startsWith(DEFAULT_AUTH_PROTECTED_PREFIX_URL)
//   const isAuthLoginRoute = nextUrl.pathname == DEFAULT_AUTH_LOGIN_URL
//   const isAuthRegisterRoute = nextUrl.pathname == DEFAULT_AUTH_REGISTER_URL

//   if (isApiAuthRoute) {
//     // return NextResponse.next()
//   }

//   // check if access login or register url
//   if (isAuthLoginRoute || isAuthRegisterRoute) {
//     if (isLoggedIn) {
//       return Response.redirect(new URL(DEFAULT_AUTH_LOGIN_REDIRECT_URL, nextUrl))
//     }
//     // return NextResponse.next()
//   }

//   if (isAuthProtectedRoute) {
//     if (!isLoggedIn) {
//       return Response.redirect(new URL(DEFAULT_AUTH_LOGIN_URL, nextUrl))
//     }
//     // return NextResponse.next()
//   }
// })

export default auth((req) => {
  // nexturl
  const { nextUrl } = req
  // is logged in
  const isLoggedIn = !!req.auth


  const isApiAuthRoute = nextUrl.pathname.startsWith(DEFAULT_AUTH_API_PREFIX_URL)
  const isAuthProtectedRoute = nextUrl.pathname.startsWith(DEFAULT_AUTH_PROTECTED_PREFIX_URL)
  const isAuthLoginRoute = nextUrl.pathname == DEFAULT_AUTH_LOGIN_URL
  const isAuthRegisterRoute = nextUrl.pathname == DEFAULT_AUTH_REGISTER_URL

  // is api auth route
  if (isApiAuthRoute) {
    // do nothing
  }

  // user is logged in and access login or register url, redirect to main page
  if (isLoggedIn && isAuthLoginRoute || isLoggedIn && isAuthRegisterRoute) {
    return Response.redirect(new URL(DEFAULT_AUTH_LOGIN_REDIRECT_URL, nextUrl.origin))
  }

  // user not logged in and access protected url, redirect to login page
  if (!isLoggedIn && isAuthProtectedRoute) {
    return Response.redirect(new URL(DEFAULT_AUTH_LOGIN_URL, nextUrl.origin))
  }
})


export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}