import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(request){
    const adminRoutes =["/admin"];
    const url =request.nextUrl.pathname;
    const token =request.cookies.get("token")?.value;

    if (adminRoutes.some((route) => url.startsWith(route))) {
        if(!token) return NextResponse.redirect(new URL("/login", request.url));
        try{
            const decoded =jwt.verify(token, process.env.JWT_SECRET);
            if (decoded.role !=="ADMIN"){
                return NextResponse.redirect(new URL("/login", request.url));
            }
        }catch(error){
                return NextResponse.redirect(new URL("/login", request.url));
            }
    }
    return NextResponse.next();
}

export const config ={
    matcher:["/admin/:path*"],
};

