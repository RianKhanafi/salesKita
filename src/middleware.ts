// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   // Assume a "Cookie:nextjs=fast" header to be present on the incoming request
//   // Getting cookies from the request using the `RequestCookies` API
//   console.log("aaa");
//   let cookie = request.cookies.get("userLogin")?.value;
//   console.log(cookie); // => 'fast'
//   const allCookies = request.cookies.getAll();
//   console.log(allCookies); // => [{ name: 'nextjs', value: 'fast' }]

//   return NextResponse.redirect(new URL("/about-2", request.url));
// }

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import Cookies from "js-cookie";
export function middleware(request: NextRequest) {
  let cookie = request.cookies.get("userLogin")?.value;
  const { pathname } = request.nextUrl;

  if (cookie && pathname.startsWith("/dashboard")) {
    return NextResponse.next();
  }

  if (cookie && pathname.startsWith("/auth")) {
    const url = request.nextUrl.clone();
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  if (!cookie && pathname.startsWith("/dashboard")) {
    const url = request.nextUrl.clone();
    url.pathname = "/auth/signin";
    return NextResponse.redirect(url);
  }
}
