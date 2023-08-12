import { useRouter } from "next/router";

export default function ResourcePage() {
	const router = useRouter();

	return <div>{router.query.slug}</div>;
}
