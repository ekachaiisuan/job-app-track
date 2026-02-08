import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getSession } from '@/lib/user';

export async function proxy(request: NextRequest) {
  const session = await getSession();
  const isDashboardPath = request.nextUrl.pathname.startsWith('/dashboard');

  if (isDashboardPath && !session?.user) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  return NextResponse.next();
}
