import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import SignOut from "@/auth/SignOut";
import Loading from "@/loading";

export default function Dashboard() {
	const router = useRouter();
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchSession() {
			const response = await fetch("/api/check-session");
			const data = await response.json();

			if (data.session) {
				setUser(data.user);
				setLoading(false);
			} else {
				router.push("/sign-in");
			}
		}

		fetchSession();
	}, [router]);

	if (loading) {
		return (
			<div>
				<Loading />
			</div>
		);
	}

	return (
		<div className="card">
			<h2>Welcome!</h2>
			<code className="highlight">{user.role}</code>
			<Link className="button" href="/profile">
				Go to Profile
			</Link>
			<SignOut />
		</div>
	);
}
