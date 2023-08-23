import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import cookie from "cookie"; // Import the cookie parser

export default async function handler(req, res) {
	// Parse the cookies from the request headers
	const rawCookies = req.headers.cookie;
	const parsedCookies = cookie.parse(rawCookies || "");

	// Pass the parsed cookies to createServerComponentClient
	const supabase = createServerComponentClient({ cookies: parsedCookies });

	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (!user) {
		res.status(401).json({ error: "Not authenticated" });
	} else {
		res.status(200).json(user);
	}
}
