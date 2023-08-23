"use client";

import { createContext, useEffect } from "react";
import { useRouter } from "next/router";
import { createClient } from "@/supabase/supabase-browser";

export const AuthContext = createContext();

const AuthProvider = ({ accessToken, children }) => {
	const supabase = createClient();
	const router = useRouter();

	useEffect(() => {
		const {
			data: { subscription: authListener },
		} = supabase.auth.onAuthStateChange((event, session) => {
			if (session?.access_token !== accessToken) {
				router.reload();
			}
		});

		return () => {
			authListener?.unsubscribe();
		};
	}, [accessToken, supabase, router]);

	return children;
};

export default AuthProvider;
