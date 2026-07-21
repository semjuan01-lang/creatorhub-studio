import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export function middleware(request: NextRequest) {


  const session = request.cookies.get(
    "creatorhub_session"
  );


  const protectedRoutes = [

    "/dashboard",
    "/live",
    "/biblioteca",
    "/editor",
    "/clipes",
    "/perfil",
    "/configuracoes"

  ];



  const isProtected =
    protectedRoutes.some((route)=>
      request.nextUrl.pathname.startsWith(route)
    );



  if(isProtected && !session){

    return NextResponse.redirect(
      new URL("/login", request.url)
    );

  }



  return NextResponse.next();

}



export const config = {

  matcher: [

    "/dashboard/:path*",
    "/live/:path*",
    "/biblioteca/:path*",
    "/editor/:path*",
    "/clipes/:path*",
    "/perfil/:path*",
    "/configuracoes/:path*"

  ]

};
