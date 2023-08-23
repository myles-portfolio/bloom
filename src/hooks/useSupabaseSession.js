import { useState, useEffect } from "react";

export function useSupabaseSession() {
	const [accessToken, setAccessToken] = useState(null);

	useEffect(() => {
		async function fetchSession() {
			try {
				const response = await fetch("/api/check-session");
				const data = await response.json();

				if (data.session) {
					// If there's an active session, set the access token
					setAccessToken(data.user?.access_token || null);
				} else {
					setAccessToken(null); // Clear the token if no active session
				}
			} catch (error) {
				console.error("Failed to fetch session:", error);
			}
		}

		fetchSession();
	}, []);

	return accessToken;
}
