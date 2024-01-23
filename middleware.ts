import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  publicRoutes: ["/"],
  afterAuth(auth, req, evt) {
    // logged in user visiting public route should be redirected
    if (auth.userId && auth.isPublicRoute) {
      if (auth.orgId) {
        const activeOrgRoute = new URL(`/organization/${auth.orgId}`, req.url);
        return NextResponse.redirect(activeOrgRoute);
      } else {
        const orgSelection = new URL("/select-org", req.url);
        return NextResponse.redirect(orgSelection);
      }
    }

    // logged in user visiting private route
    if (auth.userId) {
      // user with no active org cannot visit any route other than /select-org
      if (!auth.orgId && req.nextUrl.pathname !== "/select-org")
        return NextResponse.redirect(new URL("/select-org", req.url));

      // allow logged in user with active org to visit any route (besides public routes)
      return NextResponse.next();
    }

    // not logged in user trying to access private routes redirected to sign in
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }

    // Allow not logged in users visiting public routes to access them
    return NextResponse.next();
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
