import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

import SignOut from "src/components/SignOut";
import Loading from "@/loading";

export default function Profile() {
	const router = useRouter();
	const [user, setUser] = useState(null);

	useEffect(() => {
		fetch("/api/check-session")
			.then((response) => response.json())
			.then((data) => {
				if (!data.session) {
					router.push("/sign-in");
				} else {
					setUser(data.user);
				}
			});
	}, [router]);

	if (!user) {
		return (
			<div>
				<Loading />
			</div>
		);
	}

	return (
		<div className="card">
			<h2>User Profile</h2>
			<code className="highlight">{user.email}</code>
			<div className="heading">Last Signed In:</div>
			<code className="highlight">
				{new Date(user.last_sign_in_at).toUTCString()}
			</code>
			<Link className="button" href="/">
				Go Home
			</Link>
			<SignOut />
		</div>
	);
}
