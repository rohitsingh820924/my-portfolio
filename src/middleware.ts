import { NextResponse, NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  
    const path = request.nextUrl.pathname
    const isPublicPath = path === '/login'

    const token = request.cookies.get('token')?.value || ''
    console.log(isPublicPath);

    if(isPublicPath && token) {
        return NextResponse.redirect(new URL('/dashboard', request.nextUrl))
    }

    if(!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/', request.nextUrl))
    }

    

}
 
export const config = {
  matcher: [
    '/dashboard',
    '/login',
  ],
}