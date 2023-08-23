import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import cookie from "cookie";

export async function middleware(req) {
	const cookies = req.headers.cookie;
	const parsedCookies = cookie.parse(cookies || "");
	const res = NextResponse.next(); // Store this in a variable for clarity
	const supabase = createMiddlewareClient({
		cookies: parsedCookies,
		req,
		res,
	});
	const { data } = await supabase.auth.getSession();
	const baseUrl = "http://localhost:3000";

	if (data?.session) {
		console.log("Session found.");
		return NextResponse.redirect(`${baseUrl}/dashboard`);
	} else {
		console.log("No session found.");
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/", "/profile"],
};
