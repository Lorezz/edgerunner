import { NextResponse } from 'next/server';

export function middleware(request) {
  const { geo, url, nextUrl } = request;
  const country = geo.country || 'US';

  if (nextUrl.pathname.startsWith('/chi-siamo') && country === 'IT') {
    return NextResponse.rewrite(new URL('/about?locale=it', url));
  }
}
