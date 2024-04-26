import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/home(.*)"]);

export default clerkMiddleware((auth, req) => {
  const clerkAuth = auth();
  const userIsLoggedIn = !!clerkAuth.userId;

  if (isProtectedRoute(req)) clerkAuth.protect();
  else if (userIsLoggedIn && req.nextUrl.pathname === "/") {
    const url = req.nextUrl.clone();
    url.pathname = "/home";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
});

export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
