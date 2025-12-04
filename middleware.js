import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(request){
    const url =request.nextUrl.pathname;
    const token =request.cookies.get("token")?.value;

        if(!token) {
            return NextResponse.redirect(new URL("/login", request.url));
        
        }

        let decoded;
        try{
            decoded =jwt.verify(token, process.env.JWT_SECRET);
        }catch(error){
            return NextResponse.redirect(new URL("/login", request.url));
        }

        const role =decoded.role;
        if(role==="ADMIN"){
            return NextResponse.next();
        }
        if(role==="MANAGER" && url.startsWith("/manager")){
            return NextResponse.next();
        }
        if(role==="ADMIN_STAFF" && url.startsWith("/admin-staff")){
            return NextResponse.next();
        }
        if(role==="CASHIER" && url.startsWith("/cashier")){
            return NextResponse.next();
        }
        if(role==="METER_READER" && url.startsWith("/meter-reader")){
            return NextResponse.next();
        }
        return NextResponse.redirect(new URL("/login", request.url));
}

export const config ={
    matcher:["/admin/:path*", "/manager/:path*", "/admin-staff/:path*", "/cashier/:path*", "/meter-reader/:path*"],
};

