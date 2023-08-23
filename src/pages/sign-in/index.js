import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import SignOut from "@/auth/SignOut";

export default function SignIn() {
	const router = useRouter();
	const [user, setUser] = useState(null);

	useEffect(() => {
		fetch("/api/auth")
			.then((response) => response.json())
			.then((data) => {
				if (data && !data.error) {
					setUser(data);
					router.push("/profile");
				}
			});
	}, [router]);

	return (
		<div className="card">
			<h2>Welcome!</h2>
			{/* Render the user's role only if user is defined */}
			{user && <code className="highlight">{user.role}</code>}
			<Link className="button" href="/profile">
				Go to Profile
			</Link>
			<SignOut />
		</div>
	);
}
