import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { i18nRouter } from 'next-i18n-router';
import i18nConfig from '../i18nConfig';

export async function middleware(request: NextRequest) {
  const i18nResponse = i18nRouter(request, i18nConfig);

  const token = await getToken({ req: request });

  const url = request.nextUrl.clone();

  if (
    !token &&
    (url.pathname.startsWith('/protected') ||
      url.pathname.startsWith('/dashboard') ||
      url.pathname.startsWith('/profile'))
  ) {
    console.log('Redirecting to login due to missing token.');
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (i18nResponse) {
    return i18nResponse;
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)',
};
