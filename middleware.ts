import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { MiddlewareRequest, NextDataTransform } from '@netlify/next';

export async function middleware(req: NextRequest) {
  const { geo, url, nextUrl } = req;
  const pathname = req.nextUrl.pathname;

  const request = new MiddlewareRequest(req);
  let response;

  if (pathname.startsWith('/static') || pathname.startsWith('/adv')) {
    response = await request.next();

    const message = `hello from ${geo?.city},${geo?.country}!`;
    response.replaceText('#message', message);
    response.setPageProp('message', message);

    if (pathname.startsWith('/adv')) {
      response.setPageProp('showAd', true);
    }

    return response;
  }

  if (pathname.startsWith('/chi-siamo') && geo?.country === 'IT') {
    // return NextResponse.rewrite(new URL('/about?locale=it', url));
    return request.rewrite(new URL('/about?locale=it', url));
  }
}
