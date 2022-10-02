import { NextResponse } from 'next/server';

export function middleware(request) {
  const country = request.geo.country || 'US';
  if (request.nextUrl.pathname.startsWith('/chi-siamo')) {
    return NextResponse.rewrite(new URL('/about', request.url));
  }
}
