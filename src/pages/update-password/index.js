import { useRouter } from "next/router";
import { useEffect } from "react";

import UpdatePassword from "@/auth/components/UpdatePassword";

export default function UpdatePasswordPage() {
	const router = useRouter();

	useEffect(() => {
		fetch("/api/check-session")
			.then((response) => response.json())
			.then((data) => {
				if (!data.session) {
					router.push("/sign-in");
				}
			});
	}, [router]);

	return <UpdatePassword />;
}
