import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // retrieve the http-only cookie by its name
  const sessionToken = request.cookies.get('session_token')?.value;

  // get the requested pathname from the request
  const { pathname } = request.nextUrl;

  // (i) user is not logged in, tried to access the dashboard
  if (!sessionToken && pathname.startsWith('/dashboard')) {
    // route the user to the login page
    return NextResponse.redirect(new URL('/', request.url));
  }

  // (ii) user is logged in, tried to access the login page
  if (sessionToken && pathname === '/') {
    // route the user directly to the dashboard page
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // continue to requested page if conditions are met
  return NextResponse.next();
}

// define which paths this middleware runs on
export const config = {
  matcher: ['/dashboard/:path*', '/'],
};
