import { useState, useEffect } from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export function useSupabaseSession() {
	const [accessToken, setAccessToken] = useState(null);

	useEffect(() => {
		async function fetchSession() {
			const supabase = createServerComponentClient({ cookies });
			const {
				data: { session },
			} = await supabase.auth.getSession();
			setAccessToken(session?.access_token || null);
		}

		fetchSession();
	}, []);

	return accessToken;
}
