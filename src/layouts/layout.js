import AuthProvider from "@/auth/AuthProvider";
import Meta from "@/components/Meta";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children, accessToken }) {
	return (
		<>
			<Meta />
			<Navbar />
			<AuthProvider accessToken={accessToken}>{children}</AuthProvider>
		</>
	);
}
