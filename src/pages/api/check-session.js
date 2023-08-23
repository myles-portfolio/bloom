import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import cookie from "cookie";

export default async function handler(req, res) {
	try {
		const parsedCookies = cookie.parse(req.headers.cookie || "");
		const supabase = createServerComponentClient({ cookies: parsedCookies });

		const session = supabase.auth.session();

		if (session) {
			const user = await supabase.auth.user();
			res.status(200).json({ session: true, user: user });
		} else {
			res.status(200).json({ session: false });
		}
	} catch (error) {
		console.error("Error checking session:", error);
		res.status(500).json({ error: "Internal server error" });
	}
}
