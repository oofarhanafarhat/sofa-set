// middleware.ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isProtectedRoute = createRouteMatcher([
  "/api/cart(.*)", // Only protect cart API
  "/api/create-payment-intent(.*)",
  "/checkout(.*)",
  "/cart", // Protect cart page too
])

export default clerkMiddleware(async (auth, request) => {
  if (isProtectedRoute(request)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    '/((?!_next|.\\..).*)', // Protects all non-static files
    '/(api|trpc)(.*)',
  ],
}