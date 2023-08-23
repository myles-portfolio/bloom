import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

export default async function handler(req, res) {
	if (req.method === "GET") {
		const requestUrl = new URL(req.url, "http://" + req.headers.host); // Create URL with a dummy base to make it work
		const code = requestUrl.searchParams.get("code");

		if (code) {
			const supabase = createRouteHandlerClient({ cookies: req.cookies });
			await supabase.auth.exchangeCodeForSession(code);

			return res.redirect(`${requestUrl.origin}/update-password`);
		}

		// Logging can be done using your preferred logging method
		console.error("ERROR: Invalid auth code or no auth code found");

		return res.redirect(`${requestUrl.origin}/sign-in`);
	} else {
		res.status(405).end(); // Return "Method Not Allowed" for other request methods
	}
}
