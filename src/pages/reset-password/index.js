import { useRouter } from "next/router";
import { useEffect } from "react";

import ResetPassword from "@/auth/components/ResetPassword";

export default function ResetPasswordPage() {
	const router = useRouter();

	useEffect(() => {
		fetch("/api/check-session")
			.then((response) => response.json())
			.then((data) => {
				if (data.session) {
					router.push("/");
				}
			});
	}, [router]);

	return <ResetPassword />;
}
