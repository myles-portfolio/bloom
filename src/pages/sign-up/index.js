import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SignUp from "@/auth/components/SignUp";

export default function SignUpPage() {
	const [data, setData] = useState(null);
	const router = useRouter();

	useEffect(() => {
		async function checkSession() {
			const response = await fetch("/api/check-session");
			const result = await response.json();

			setData(result);
		}

		checkSession();
	}, [router]);

	if (data?.session) {
		router.push("/");
	}

	return <SignUp />;
}
